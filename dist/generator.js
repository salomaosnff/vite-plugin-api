function parseType(item) {
    var _a;
    if (item.type === 'array') {
        return parseType(item.items) + '[]';
    }
    if (item.enum) {
        return item.enum.map((value) => JSON.stringify(value)).join(' | ');
    }
    if (item.$ref) {
        return 'Schemas.' + item.$ref.split('/').pop();
    }
    if (item.type === 'object') {
        return '{\n' + Object.entries((_a = item.properties) !== null && _a !== void 0 ? _a : {}).map(([key, value]) => '      ' + key + (value.nullable ? '?:' : ':') + parseType(value)).join('\n') + '\n    }';
    }
    if (item.type === 'string') {
        return 'string';
    }
    if (item.type === 'integer') {
        return 'number';
    }
    if (item.type === 'boolean') {
        return 'boolean';
    }
    if (item.type === 'number') {
        return 'number';
    }
    return 'any';
}
function parseParameter(parameter) {
    let param = `"${parameter.name}"`;
    param += parameter.required ? ':' : '?:';
    param += parseType(parameter.schema);
    return param;
}
function parseSchema(schemaName, schema) {
    if (schema.properties) {
        let code = `interface ${schemaName} {\n`;
        for (const [propertyName, property] of Object.entries(schema.properties)) {
            code += '  ' + propertyName + (property.nullable ? '?:' : ':') + parseType(property) + '\n';
        }
        code += '}\n';
        return code;
    }
    return `type ${schemaName} = ${parseType(schema)}`;
}
function getPathPrefix(paths) {
    return Object.keys(paths).reduce((prefix, path) => {
        if (prefix === null) {
            return path;
        }
        let i = 0;
        while (i < prefix.length && i < path.length && prefix[i] === path[i]) {
            i++;
        }
        return prefix.substring(0, i);
    }, null);
}
function getCommonQueryParameters(paths) {
    let queryInAllOperations = new Set();
    for (const pathItem of Object.values(paths)) {
        for (const operation of Object.values(pathItem)) {
            if (!operation.parameters) {
                continue;
            }
            const queryParameters = operation.parameters.filter((parameter) => parameter.in === 'query');
            if (queryInAllOperations.size === 0) {
                for (const parameter of queryParameters) {
                    queryInAllOperations.add(parameter.name);
                }
            }
            else {
                for (const parameter of queryInAllOperations) {
                    if (!queryParameters.find((queryParameter) => queryParameter.name === parameter)) {
                        queryInAllOperations.delete(parameter);
                    }
                }
            }
        }
    }
    return queryInAllOperations;
}
function parseOperationParams(parameters) {
    if (parameters.length === 0) {
        return null;
    }
    const params = parameters.filter(parameter => parameter.in === 'path');
    if (params.length === 0) {
        return null;
    }
    return '{\n' + params.map(parseParameter).join(',\n') + '\n}';
}
function parseOperationQuery(parameters, baseQuery) {
    if (parameters.length === 0) {
        return null;
    }
    parameters = parameters.filter(parameter => parameter.in === 'query' && !baseQuery.has(parameter.name)).map(parseParameter);
    let code = '';
    if (parameters.length > 0) {
        code = '{\n' + parameters.join(',\n') + '\n}';
    }
    if (baseQuery.size > 0) {
        code = code ? `BaseQueryParams & ${code}` : 'BaseQueryParams';
    }
    return code || null;
}
function parseOperationBody(requestBody) {
    var _a;
    if (!requestBody) {
        return null;
    }
    return (_a = [...new Set(Object.entries(requestBody.content).map(([contentType, content]) => {
            if (contentType.includes('json')) {
                return parseType(content.schema);
            }
            if (contentType.includes('form-data')) {
                return 'FormData';
            }
            if (contentType.includes('x-www-form-urlencoded')) {
                return 'URLSearchParams';
            }
            if (contentType.includes('octet-stream')) {
                return 'Blob';
            }
        }))].filter(c => c).join(' | ')) !== null && _a !== void 0 ? _a : 'any';
}
export function hasInput(operation) {
    var _a;
    return ((_a = operation.parameters) === null || _a === void 0 ? void 0 : _a.some((parameter) => parameter.in === 'path')) || !!operation.requestBody;
}
function parseOperation(operation, baseQuery) {
    var _a, _b;
    const params = parseOperationParams((_a = operation.parameters) !== null && _a !== void 0 ? _a : []);
    const query = parseOperationQuery((_b = operation.parameters) !== null && _b !== void 0 ? _b : [], baseQuery);
    const body = parseOperationBody(operation.requestBody);
    let code = '{\n';
    if (params) {
        code += '  params: ' + params + ',\n';
    }
    if (query) {
        code += '  query?: ' + query + ',\n';
    }
    if (body) {
        code += '  body: ' + body + ',\n';
    }
    code += '}\n';
    if (code === '{\n}\n') {
        return null;
    }
    return code;
}
export function parseResponse(contentType, response) {
    if (contentType.includes('json')) {
        return parseType(response.schema);
    }
}
export function parseResponses(responses) {
    return Object.values(responses).flatMap((response) => {
        if (!response.content) {
            return;
        }
        return [...new Set(Object.entries(response.content).map(([contentType, content]) => parseResponse(contentType, content)))];
    }).filter(c => c).join(' | ') || 'any';
}
function defineOptions(document, _a) {
    var _b;
    var { swaggerBaseUrl = '', basePath = (_b = getPathPrefix(document.paths)) !== null && _b !== void 0 ? _b : '', getOperationName = (method, path, operation) => {
        var _a;
        if (operation.operationId) {
            return operation.operationId;
        }
        if (operation.summary) {
            return operation.summary;
        }
        let action = (_a = {
            get: 'get',
            post: 'create',
            put: 'replace',
            delete: 'delete',
            patch: 'update',
        }[method]) !== null && _a !== void 0 ? _a : 'request';
        return action + path.replace(basePath, '').split('/').map(part => {
            if (part.startsWith('{') && part.endsWith('}')) {
                return `By${part.substring(1, part.length - 1).replace(/./, (c) => c.toUpperCase())}`;
            }
            return part.replace(/^./, (c) => c.toUpperCase());
        }).join('');
    }, getServiceName = (method, path, operation) => {
        var _a, _b;
        const name = (_b = (_a = operation.tags) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : path.replace(basePath, '').split('/')[1];
        return name.replace(/^./, (c) => c.toUpperCase()) + 'Service';
    } } = _a === void 0 ? {} : _a;
    return {
        swaggerBaseUrl,
        basePath,
        getOperationName,
        getServiceName,
    };
}
export function generate(document, options) {
    const { basePath, getOperationName, getServiceName, swaggerBaseUrl } = defineOptions(document, options);
    let code = '';
    const services = Object.entries(document.paths).reduce((services, [path, pathItem]) => {
        return Object.entries(pathItem).reduce((services, [method, operation]) => {
            var _a, _b, _c;
            const serviceName = getServiceName(method, path, operation);
            let code = (_a = services.get(serviceName)) !== null && _a !== void 0 ? _a : '';
            const operationName = getOperationName(method, path, operation);
            const input = hasInput(operation);
            const output = parseResponses(operation.responses);
            code += '  /**\n';
            code += `   * ${method.toUpperCase()} ${path}\n`;
            if (operation.description) {
                code += '   * ' + operation.description + '\n';
            }
            if (operation.operationId) {
                for (const tag of (_b = operation.tags) !== null && _b !== void 0 ? _b : []) {
                    code += `   * @see ${swaggerBaseUrl}/#/${tag}/${operation.operationId}\n`;
                }
            }
            for (const [status, response] of Object.entries(operation.responses)) {
                if (response.description) {
                    code += `   * @response ${status} ${response.description}\n`;
                }
            }
            code += '   */\n';
            code += `  async ${operationName}(${input ? `options` : ''}) {\n`;
            code += `    const url = new URL(\`${path.replace(/{(.+?)}/g, '${encodeURIComponent(String(options.params.$1))}')}\`, this.baseUrl)\n`;
            if ((_c = operation.parameters) === null || _c === void 0 ? void 0 : _c.some((parameter) => parameter.in === 'query')) {
                code += `    url.search = new URLSearchParams(options.query).toString()\n`;
            }
            code += `    return this.http({\n`;
            code += `      url,\n`;
            code += `      method: '${method.toUpperCase()}',\n`;
            if (operation.requestBody) {
                code += `      body: options.body,\n`;
            }
            code += `    })\n`;
            code += '  }\n\n';
            services.set(serviceName, code);
            return services;
        }, services);
    }, new Map());
    code += 'export const Services = {\n';
    for (const [serviceName, serviceCode] of services) {
        code += `${serviceName}: class ${serviceName} {\n`;
        code += `  baseUrl = '${basePath}'\n\n`;
        code += `  constructor(http) { this.http = http }\n`;
        code += serviceCode;
        code += '},\n';
    }
    code += '}\n';
    code += 'export default {Services}';
    return code;
}
export function generateTypes(document, options) {
    const { basePath, getOperationName, getServiceName, swaggerBaseUrl } = defineOptions(document, options);
    let code = '';
    code += `export type HttpAdapter = <T>(request: BaseRequest<any>) => Promise<BaseResponse<T>>\n`;
    code += `export interface BaseRequest<T> {\n`;
    code += `  url: URL\n`;
    code += `  method: string\n`;
    code += `  body?: T\n`;
    code += `}\n\n`;
    code += `export interface BaseResponse<T = any> {\n`;
    code += `  status: number\n`;
    code += `  data: T\n`;
    code += `}\n\n`;
    code += 'export namespace Schemas {\n';
    for (const [schemaName, schema] of Object.entries(document.components.schemas)) {
        code += `export ${parseSchema(schemaName, schema)}\n`;
    }
    code += '}\n\n';
    const baseQueryParameters = getCommonQueryParameters(document.paths);
    if (baseQueryParameters.size > 0) {
        code += 'interface BaseQueryParams {\n';
        for (const queryName of baseQueryParameters) {
            code += '  ' + queryName + '?: string | string[]\n';
        }
        code += '}\n';
    }
    const services = Object.entries(document.paths).reduce((services, [path, pathItem]) => {
        return Object.entries(pathItem).reduce((services, [method, operation]) => {
            var _a, _b;
            const serviceName = getServiceName(method, path, operation);
            let code = (_a = services.get(serviceName)) !== null && _a !== void 0 ? _a : '';
            const operationName = getOperationName(method, path, operation);
            const input = parseOperation(operation, baseQueryParameters);
            const output = parseResponses(operation.responses);
            code += '  /**\n';
            code += `   * ${method.toUpperCase()} ${path}\n`;
            if (operation.description) {
                code += '   * ' + operation.description + '\n';
            }
            if (operation.operationId) {
                for (const tag of (_b = operation.tags) !== null && _b !== void 0 ? _b : []) {
                    code += `   * @see ${swaggerBaseUrl}/#/${tag}/${operation.operationId}\n`;
                }
            }
            for (const [status, response] of Object.entries(operation.responses)) {
                if (response.description) {
                    code += `   * @response ${status} ${response.description}\n`;
                }
            }
            code += '   */\n';
            code += `  ${operationName}(${input ? `options: ${input}` : ''}): Promise<BaseResponse<${output}>>;\n\n`;
            services.set(serviceName, code);
            return services;
        }, services);
    }, new Map());
    code += 'export namespace Services {\n';
    for (const [serviceName, serviceCode] of services) {
        code += `export class ${serviceName} {\n`;
        code += `  private readonly http: HttpAdapter\n\n`;
        code += `  constructor(http: HttpAdapter);\n\n`;
        code += serviceCode;
        code += '}\n';
    }
    code += '}\n';
    return code;
}
