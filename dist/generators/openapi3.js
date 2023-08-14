var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { camelCase, pascalCase } from 'change-case';
function parseSchema(schema) {
    if ('$ref' in schema) {
        return 'Models.' + schema.$ref.split('/').pop();
    }
    if (schema.enum) {
        return schema.enum.map(v => JSON.stringify(v)).join(' | ');
    }
    if (schema.type === 'string') {
        return 'string';
    }
    if (schema.type === 'array') {
        return `${parseSchema(schema.items)}[]`;
    }
    if (schema.type === 'object') {
        return '{' +
            Object.entries(schema.properties || {})
                .map(([name, schema]) => `${name}${schema.required ? '' : '?'}: ${parseSchema(schema)}`)
                .join(',\n') +
            '}';
    }
    if (schema.type === 'integer' || schema.type === 'number') {
        return 'number';
    }
}
function getBasePath(paths) {
    const pathArr = paths.map((path) => path.split('/'));
    const base = pathArr[0].filter((dir, i) => pathArr.every((p) => p[i] === dir));
    return base.join('/');
}
export function getServiceBaseUrl(service) {
    return getBasePath(Object.values(service.operations).map(operation => operation.path)).replace(/\/+$/, '');
}
export function operationNameByPathAndMethod(path, method, actions = {
    get: 'get',
    post: 'create',
    put: 'replace',
    delete: 'delete',
    patch: 'update',
}) {
    var _a;
    const action = (_a = actions[method.toLowerCase()]) !== null && _a !== void 0 ? _a : method.toLowerCase();
    const name = path.replace(/\{(.+?)\}/g, (_, p) => 'By' + pascalCase(p)).replace(/\/+/g, ' ');
    return camelCase(`${action} ${name}`);
}
export class OpenAPIV3Parser {
    constructor(options = {}) {
        this.options = options;
    }
    getServiceName(path, method, operation) {
        var _a, _b, _c;
        return ((_b = (_a = this.options).getServiceName) === null || _b === void 0 ? void 0 : _b.call(_a, path, method, operation)) || pascalCase((_c = operation.tags) === null || _c === void 0 ? void 0 : _c[0]) || 'ApiService';
    }
    getOperationName(operation) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.options).getOperationName) === null || _b === void 0 ? void 0 : _b.call(_a, operation)) !== null && _c !== void 0 ? _c : (operation.id ? camelCase(operation.id) : operationNameByPathAndMethod(operation.path, operation.method));
    }
    parseParameter(param) {
        return {
            name: param.name,
            required: param.required,
            type: parseSchema(param.schema),
            description: param.description,
        };
    }
    parseBody(schema) {
        if (!(schema === null || schema === void 0 ? void 0 : schema.content)) {
            return [];
        }
        const bodies = [];
        for (const [contentType, content] of Object.entries(schema.content)) {
            if (contentType.includes('json')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    schema: parseSchema(content.schema),
                    description: schema.description,
                });
                continue;
            }
            if (contentType.includes('form-data')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    type: 'FormData',
                    schema: parseSchema(content.schema),
                    description: schema.description,
                });
                continue;
            }
            if (contentType.includes('x-www-form-urlencoded')) {
                bodies.push({
                    required: schema.required,
                    contentType,
                    type: 'URLSearchParams',
                    schema: parseSchema(content.schema),
                    description: schema.description,
                });
                continue;
            }
        }
        return bodies;
    }
    parseResponses(responses) {
        const bodies = [];
        function genResponseId(code, type) {
            return `${code}_${type}`;
        }
        const responsed = new Set();
        for (const [code, response] of Object.entries(responses)) {
            if (!response.content) {
                const id = genResponseId(parseInt(code), 'void');
                if (responsed.has(id))
                    continue;
                bodies.push({
                    status: parseInt(code),
                    contentType: '',
                    type: 'void',
                    description: response.description,
                });
                continue;
            }
            for (const [contentType, content] of Object.entries((response).content || {})) {
                const status = parseInt(code);
                const type = parseSchema(content.schema);
                const id = genResponseId(status, type);
                if (responsed.has(id))
                    continue;
                bodies.push({
                    status,
                    contentType,
                    type,
                    description: response.description,
                });
                responsed.add(id);
            }
        }
        return bodies;
    }
    parseOperation(operation) {
        const parameters = [];
        const queryParameters = [];
        for (const param of (operation.parameters || [])) {
            const item = this.parseParameter(param);
            if (param.in === 'query') {
                queryParameters.push(item);
            }
            else {
                parameters.push(item);
            }
        }
        return {
            parameters,
            queryParameters,
            body: this.parseBody(operation.requestBody),
            responses: this.parseResponses(operation.responses),
        };
    }
    parse(input) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const docs = {
                name: '',
                models: {},
                services: []
            };
            const serviceMap = new Map();
            for (const [name, schema] of Object.entries(((_a = input.components) === null || _a === void 0 ? void 0 : _a.schemas) || {})) {
                docs.models[name] = parseSchema(schema);
            }
            for (const [path, pathItem] of Object.entries(input.paths)) {
                for (const [method, operation] of Object.entries(pathItem)) {
                    const serviceName = this.getServiceName(path, method, operation);
                    const service = (_b = serviceMap.get(serviceName)) !== null && _b !== void 0 ? _b : {
                        name: serviceName,
                        baseUrl: '',
                        operations: []
                    };
                    const { body, responses, parameters, queryParameters } = this.parseOperation(operation);
                    service.operations.push({
                        id: (_c = operation.operationId) !== null && _c !== void 0 ? _c : null,
                        description: operation.description,
                        body,
                        method: method.toUpperCase(),
                        parameters,
                        path: path,
                        queryParameters,
                        responses,
                        see: operation.operationId && this.options.swaggerBaseUrl ? operation.tags.map(tag => `${this.options.swaggerBaseUrl}#/${tag}/${operation.operationId}`) : [],
                    });
                    serviceMap.set(serviceName, service);
                }
            }
            for (const service of serviceMap.values()) {
                service.baseUrl = getServiceBaseUrl(service);
                for (const operation of service.operations) {
                    if (operation.path === service.baseUrl || operation.path.startsWith(service.baseUrl + '/')) {
                        operation.path = operation.path.slice(service.baseUrl.length);
                    }
                    operation.id = this.getOperationName(operation);
                    service.operations[operation.id] = operation;
                }
                service.baseUrl = ((_e = (_d = this.options.apiBaseUrl) !== null && _d !== void 0 ? _d : this.options.swaggerBaseUrl) !== null && _e !== void 0 ? _e : '').replace(/\/+$/, '') + service.baseUrl;
                docs.services.push(service);
            }
            return docs;
        });
    }
}
