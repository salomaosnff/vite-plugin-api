import type { OpenAPIV3 } from "openapi-types";
import type { ApiDocs, ApiDocsParser, Operation, OperationBody, OperationParameter, OperationResponse, Service } from "../types";
import { camelCase, pascalCase } from 'change-case'
import { randomUUID } from "crypto";

function parseSchema(schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject): string {
    if ('$ref' in schema) {
        return 'Models.' + schema.$ref.split('/').pop()!
    }

    if (schema.enum) {
        return schema.enum.map(v => JSON.stringify(v)).join(' | ')
    }

    if (schema.type === 'string') {
        return 'string'
    }

    if (schema.type === 'array') {
        return `${parseSchema(schema.items!)}[]`
    }

    if (schema.type === 'object') {
        return '{' +
            Object.entries(schema.properties || {})
                .map(([name, schema]: [string, any]) => `${name}${schema.required ? '' : '?'}: ${parseSchema(schema)}`)
                .join(',\n') +
            '}'
    }

    if (schema.type === 'integer' || schema.type === 'number') {
        return 'number'
    }
}

export interface OpenAPIV3GeneratorOptions {
    swaggerBaseUrl?: string;
    apiBaseUrl?: string;
    getOperationName?(operation: Operation): string;
    getServiceName?(path: string, method: string, operation: OpenAPIV3.OperationObject): string;
}

function getBasePath(paths: string[]) {
    const pathArr = paths.map((path) => path.split('/'));
    const base = pathArr[0].filter((dir, i) => pathArr.every((p) => p[i] === dir));
    return base.join('/');
}

export function getServiceBaseUrl(service: Service) {
    return getBasePath(Object.values(service.operations).map(operation => operation.path)).replace(/\/+$/, '')
}

export function operationNameByPathAndMethod(path: string, method: string, actions: Record<string, string> = {
    get: 'get',
    post: 'create',
    put: 'replace',
    delete: 'delete',
    patch: 'update',
}) {
    const action = actions[method.toLowerCase()] ?? method.toLowerCase()
    const name = path.replace(/\{(.+?)\}/g, (_, p) => 'By' + pascalCase(p)).replace(/\/+/g, ' ')

    return camelCase(`${action} ${name}`)
}

export class OpenAPIV3Parser implements ApiDocsParser {
    constructor(private options: OpenAPIV3GeneratorOptions = {}) { }


    getServiceName(path: string, method: string, operation: OpenAPIV3.OperationObject): string {
        return this.options.getServiceName?.(path, method, operation) || pascalCase(operation.tags?.[0]) || 'ApiService'
    }

    getOperationName(operation: Operation): string {
        return this.options.getOperationName?.(operation) ?? (operation.id ? camelCase(operation.id) : operationNameByPathAndMethod(operation.path, operation.method))
    }

    parseParameter(param: OpenAPIV3.ParameterObject): OperationParameter {
        return {
            name: param.name,
            required: param.required,
            type: parseSchema(param.schema),
            description: param.description,
        }
    }

    parseBody(schema: OpenAPIV3.RequestBodyObject): OperationBody[] {
        if (!schema?.content) {
            return []
        }

        const bodies: OperationBody[] = []

        for (const [contentType, content] of Object.entries(schema.content)) {
            if (contentType.includes('json')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    schema: parseSchema(content.schema),
                    description: schema.description,
                })

                continue
            }

            if (contentType.includes('form-data')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    type: 'FormData',
                    schema: parseSchema(content.schema),
                    description: schema.description,
                })

                continue
            }

            if (contentType.includes('x-www-form-urlencoded')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    type: 'URLSearchParams',
                    schema: parseSchema(content.schema),
                    description: schema.description,
                })

                continue
            }
        }

        return bodies
    }

    parseResponses(responses: OpenAPIV3.ResponsesObject): OperationResponse[] {
        const bodies: OperationResponse[] = []

        function genResponseId(code: number, type: string) {
            return `${code}_${type}`
        }

        const responsed = new Set<string>()

        for (const [code, response] of Object.entries(responses) as [string, OpenAPIV3.ResponseObject][]) {
            if(!response.content) {
                const id = genResponseId(parseInt(code), 'void')
                if (responsed.has(id)) continue
                bodies.push({
                    status: parseInt(code),
                    contentType: '',
                    type: 'void',
                    description: response.description,
                })
                continue
            }
            for (const [contentType, content] of Object.entries((response).content || {})) {
                const status = parseInt(code)
                const type = parseSchema(content.schema)
                const id = genResponseId(status, type)

                if (responsed.has(id)) continue

                bodies.push({
                    status,
                    contentType,
                    type,
                    description: response.description,
                })
                
                responsed.add(id)
            }
        }

        return bodies
    }

    parseOperation(operation: OpenAPIV3.OperationObject) {
        const parameters: OperationParameter[] = []
        const queryParameters: OperationParameter[] = []

        for (const param of (operation.parameters || []) as OpenAPIV3.ParameterObject[]) {
            const item = this.parseParameter(param)

            if (param.in === 'query') {
                queryParameters.push(item)
            } else {
                parameters.push(item)
            }
        }

        return {
            parameters,
            queryParameters,
            body: this.parseBody(operation.requestBody as OpenAPIV3.RequestBodyObject),
            responses: this.parseResponses(operation.responses as OpenAPIV3.ResponsesObject),
        }
    }

    async parse(input: OpenAPIV3.Document): Promise<ApiDocs> {
        const docs: ApiDocs = {
            name: '',
            models: {},
            services: []
        }

        const serviceMap = new Map<string, Service>()

        for (const [name, schema] of Object.entries(input.components?.schemas || {})) {
            docs.models[name] = parseSchema(schema)
        }

        for (const [path, pathItem] of Object.entries(input.paths)) {
            for (const [method, operation] of Object.entries(pathItem as {
                [method in OpenAPIV3.HttpMethods]?: OpenAPIV3.OperationObject;
            })) {
                const serviceName = this.getServiceName(path, method, operation)

                const service = serviceMap.get(serviceName) ?? {
                    name: serviceName,
                    baseUrl: '',
                    operations: []
                }

                const { body, responses, parameters, queryParameters } = this.parseOperation(operation)

                service.operations.push({
                    id: operation.operationId ?? null,
                    description: operation.description,
                    body,
                    method: method.toUpperCase(),
                    parameters,
                    path: path,
                    queryParameters,
                    responses,
                    see: operation.operationId && this.options.swaggerBaseUrl ? operation.tags.map(tag => `${this.options.swaggerBaseUrl}#/${tag}/${operation.operationId}`) : [],
                })

                serviceMap.set(serviceName, service)
            }
        }

        for (const service of serviceMap.values()) {
            service.baseUrl = getServiceBaseUrl(service)

            for (const operation of service.operations) {

                if (operation.path === service.baseUrl || operation.path.startsWith(service.baseUrl + '/')) {
                    operation.path = operation.path.slice(service.baseUrl.length)
                }


                operation.id = this.getOperationName(operation)
                service.operations[operation.id] = operation

            }
            service.baseUrl = (this.options.apiBaseUrl ?? this.options.swaggerBaseUrl ?? '').replace(/\/+$/, '') + service.baseUrl
            docs.services.push(service)
        }

        return docs
    }
}