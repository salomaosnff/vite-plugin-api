import { OpenAPIV3 } from 'openapi-types'
import * as prettier from "prettier";


function parseType(item: any) {
    if (item.type === 'array') {
        return parseType(item.items) + '[]'
    }

    if (item.enum) {
        return item.enum.map((value: any) => JSON.stringify(value)).join(' | ')
    }

    if (item.$ref) {
        return 'Schemas.' + item.$ref.split('/').pop()
    }

    if (item.type === 'object') {
        return '{\n' + Object.entries<any>(item.properties ?? {}).map(([key, value]) => '      ' + key + (value.nullable ? '?:' : ':') + parseType(value)).join('\n') + '\n    }'
    }

    if (item.type === 'string') {
        return 'string'
    }

    if (item.type === 'integer') {
        return 'number'
    }

    if (item.type === 'boolean') {
        return 'boolean'
    }

    if (item.type === 'number') {
        return 'number'
    }

    return 'any'
}

function parseParameter(parameter: OpenAPIV3.ParameterObject) {
    let param = `"${parameter.name}"`

    param += parameter.required ? ':' : '?:'

    param += parseType(parameter.schema)

    return param
}

function parseSchema(schemaName: string, schema: OpenAPIV3.SchemaObject) {
    if (schema.properties) {
        let code = `interface ${schemaName} {\n`
        for (const [propertyName, property] of Object.entries<any>(schema.properties)) {
            code += '  ' + propertyName + (property.nullable ? '?:' : ':') + parseType(property) + '\n'
        }
        code += '}\n'

        return code
    }

    return `type ${schemaName} = ${parseType(schema)}`
}

function getPathPrefix(paths: OpenAPIV3.PathItemObject) {
    return Object.keys(paths).reduce((prefix, path) => {
        if (prefix === null) {
            return path
        }

        let i = 0

        while (i < prefix.length && i < path.length && prefix[i] === path[i]) {
            i++
        }

        return prefix.substring(0, i)
    }, null as string | null)
}

function getCommonQueryParameters(paths: any) {
    let queryInAllOperations = new Set<string>()

    for (const pathItem of Object.values<any>(paths)) {
        for (const operation of Object.values<any>(pathItem)) {
            if (!operation.parameters) {
                continue
            }

            const queryParameters = operation.parameters.filter((parameter: any) => parameter.in === 'query')

            if (queryInAllOperations.size === 0) {
                for (const parameter of queryParameters) {
                    queryInAllOperations.add(parameter.name)
                }
            } else {
                for (const parameter of queryInAllOperations) {
                    if (!queryParameters.find((queryParameter: any) => queryParameter.name === parameter)) {
                        queryInAllOperations.delete(parameter)
                    }
                }
            }
        }
    }

    return queryInAllOperations
}

function parseOperationParams(parameters: any[]) {
    if (parameters.length === 0) {
        return null
    }

    const params = parameters.filter(parameter => parameter.in === 'path')

    if (params.length === 0) {
        return null
    }

    return '{\n' + params.map(parseParameter).join(',\n') + '\n}'
}

function parseOperationQuery(parameters: any[], baseQuery: Set<string>) {
    if (parameters.length === 0) {
        return null
    }

    parameters = parameters.filter(parameter => parameter.in === 'query' && !baseQuery.has(parameter.name)).map(parseParameter)

    let code = ''

    if (parameters.length > 0) {
        code = '{\n' + parameters.join(',\n') + '\n}'
    }

    if (baseQuery.size > 0) {
        code = code ? `BaseQueryParams & ${code}` : 'BaseQueryParams'
    }

    return code || null
}

function parseOperationBody(requestBody?: any) {
    if (!requestBody) {
        return null
    }

    return [...new Set(Object.entries<any>(requestBody.content).map(([contentType, content]) => {
        if (contentType.includes('json')) {
            return parseType(content.schema)
        }

        if (contentType.includes('form-data')) {
            return 'FormData'
        }

        if (contentType.includes('x-www-form-urlencoded')) {
            return 'URLSearchParams'
        }

        if (contentType.includes('octet-stream')) {
            return 'Blob'
        }
    }))].filter(c => c).join(' | ') ?? 'any'
}

export function hasInput(operation: OpenAPIV3.OperationObject) {
    return operation.parameters?.some((parameter: OpenAPIV3.ParameterObject) => parameter.in === 'path') || !!operation.requestBody
}

function parseOperation(operation: OpenAPIV3.OperationObject, baseQuery: Set<string>) {
    const params = parseOperationParams(operation.parameters ?? [])
    const query = parseOperationQuery(operation.parameters ?? [], baseQuery)
    const body = parseOperationBody(operation.requestBody)

    let code = '{\n'

    if (params) {
        code += '  params: ' + params + ',\n'
    }

    if (query) {
        code += '  query?: ' + query + ',\n'
    }

    if (body) {
        code += '  body: ' + body + ',\n'
    }

    code += '}\n'

    if (code === '{\n}\n') {
        return null
    }

    return code
}

export function parseResponse(contentType: string, response: OpenAPIV3.MediaTypeObject) {
    if (contentType.includes('json')) {
        return parseType(response.schema)
    }
}

export function parseResponses(responses: OpenAPIV3.ResponsesObject) {
    return Object.values<any>(responses).flatMap((response) => {
        if (!response.content) {
            return;
        }

        return [...new Set(Object.entries<any>(response.content).map(([contentType, content]) => parseResponse(contentType, content)))]
    }).filter(c => c).join(' | ') || 'any'
}

function defineOptions(document: OpenAPIV3.Document, {
    swaggerBaseUrl = '',
    basePath = getPathPrefix(document.paths) ?? '',
    getOperationName = (method: OpenAPIV3.HttpMethods, path: string, operation: OpenAPIV3.OperationObject) => {
        if (operation.operationId) {
            return operation.operationId
        }

        if (operation.summary) {
            return operation.summary
        }

        let action = {
            get: 'get',
            post: 'create',
            put: 'replace',
            delete: 'delete',
            patch: 'update',
        }[method] ?? 'request'

        return action + path.replace(basePath, '').split('/').map(part => {
            if (part.startsWith('{') && part.endsWith('}')) {
                return `By${part.substring(1, part.length - 1).replace(/./, (c) => c.toUpperCase())}`
            }

            return part.replace(/^./, (c) => c.toUpperCase())
        }).join('')
    },
    getServiceName = (method: OpenAPIV3.HttpMethods, path: string, operation: OpenAPIV3.OperationObject) => {
        const name = operation.tags?.[0] ?? path.replace(basePath, '').split('/')[1]

        return name.replace(/^./, (c) => c.toUpperCase()) + 'Service'
    }
} = {}) {
    return {
        swaggerBaseUrl,
        basePath,
        getOperationName,
        getServiceName,
    }
}

export function generate(document: any, options: any) {
    const { basePath, getOperationName, getServiceName, swaggerBaseUrl } = defineOptions(document, options)

    let code = ''

    const services = Object.entries<any>(document.paths).reduce((services, [path, pathItem]) => {
        return Object.entries<any>(pathItem).reduce((services, [method, operation]) => {
            const serviceName = getServiceName(method as OpenAPIV3.HttpMethods, path, operation)
            let code = services.get(serviceName) ?? ''
            const operationName = getOperationName(method as OpenAPIV3.HttpMethods, path, operation)
            const input = hasInput(operation)
            const output = parseResponses(operation.responses)


            code += '  /**\n'
            code += `   * ${method.toUpperCase()} ${path}\n`
            if (operation.description) {
                code += '   * ' + operation.description + '\n'
            }

            if (operation.operationId) {
                for (const tag of operation.tags ?? []) {
                    code += `   * @see ${swaggerBaseUrl}/#/${tag}/${operation.operationId}\n`
                }
            }

            for (const [status, response] of Object.entries<any>(operation.responses)) {
                if (response.description) {
                    code += `   * @response ${status} ${response.description}\n`
                }
            }
            code += '   */\n'
            code += `  async ${operationName}(${input ? `options` : ''}) {\n`
            code += `    const url = new URL(\`${path.replace(/{(.+?)}/g, '${encodeURIComponent(String(options.params.$1))}')}\`, this.baseUrl)\n`
            if (operation.parameters?.some((parameter: OpenAPIV3.ParameterObject) => parameter.in === 'query')) {
                code += `    url.search = new URLSearchParams(options.query).toString()\n`
            }
            code += `    return this.http({\n`
            code += `      url,\n`
            code += `      method: '${method.toUpperCase()}',\n`
            if (operation.requestBody) {
                code += `      body: options.body,\n`
            }
            code += `    })\n`
            code += '  }\n\n'

            services.set(serviceName, code)

            return services
        }, services)
    }, new Map<string, string>())

    code += 'export const Services = {\n'
    for (const [serviceName, serviceCode] of services) {
        code += `${serviceName}: class ${serviceName} {\n`
        code += `  baseUrl = '${basePath}'\n\n`
        code += `  constructor(http) { this.http = http }\n`
        code += serviceCode
        code += '},\n'
    }
    code += '}\n'

    code += 'export default {Services}'

    return code
}

export function generateTypes(document: OpenAPIV3.Document, options: any) {
    const { basePath, getOperationName, getServiceName, swaggerBaseUrl } = defineOptions(document, options)
    let code = ''

    code += `export type HttpAdapter = <T>(request: BaseRequest<any>) => Promise<BaseResponse<T>>\n`

    code += `export interface BaseRequest<T> {\n`
    code += `  url: URL\n`
    code += `  method: string\n`
    code += `  body?: T\n`
    code += `}\n\n`

    code += `export interface BaseResponse<T = any> {\n`
    code += `  status: number\n`
    code += `  data: T\n`
    code += `}\n\n`

    code += 'export namespace Schemas {\n'

    for (const [schemaName, schema] of Object.entries<any>(document.components.schemas)) {
        code += `export ${parseSchema(schemaName, schema)}\n`
    }

    code += '}\n\n'

    const baseQueryParameters = getCommonQueryParameters(document.paths)

    if (baseQueryParameters.size > 0) {
        code += 'interface BaseQueryParams {\n'
        for (const queryName of baseQueryParameters) {
            code += '  ' + queryName + '?: string | string[]\n'
        }
        code += '}\n'
    }

    const services = Object.entries<any>(document.paths).reduce((services, [path, pathItem]) => {
        return Object.entries<any>(pathItem).reduce((services, [method, operation]) => {
            const serviceName = getServiceName(method as OpenAPIV3.HttpMethods, path, operation)
            let code = services.get(serviceName) ?? ''
            const operationName = getOperationName(method as OpenAPIV3.HttpMethods, path, operation)
            const input = parseOperation(operation, baseQueryParameters)
            const output = parseResponses(operation.responses)


            code += '  /**\n'
            code += `   * ${method.toUpperCase()} ${path}\n`
            if (operation.description) {
                code += '   * ' + operation.description + '\n'
            }

            if (operation.operationId) {
                for (const tag of operation.tags ?? []) {
                    code += `   * @see ${swaggerBaseUrl}/#/${tag}/${operation.operationId}\n`
                }
            }

            for (const [status, response] of Object.entries<any>(operation.responses)) {
                if (response.description) {
                    code += `   * @response ${status} ${response.description}\n`
                }
            }
            code += '   */\n'
            code += `  ${operationName}(${input ? `options: ${input}` : ''}): Promise<BaseResponse<${output}>>;\n\n`

            services.set(serviceName, code)

            return services
        }, services)
    }, new Map<string, string>())

    code += 'export namespace Services {\n'
    for (const [serviceName, serviceCode] of services) {
        code += `export class ${serviceName} {\n`
        code += `  private readonly http: HttpAdapter\n\n`
        code += `  constructor(http: HttpAdapter);\n\n`
        code += serviceCode
        code += '}\n'
    }
    code += '}\n'

    return code
}