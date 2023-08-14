var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createWritter } from "../util";
export class DtsRenderer {
    constructor() {
        this._indentation = 0;
    }
    renderOperationParams(params) {
        if (params.length === 0) {
            return;
        }
        const writer = createWritter();
        writer.writeLine(`{`);
        writer.indent(() => {
            writer.writeLines(params.map(param => `${param.name}${param.required ? '' : '?'}: ${param.type};`));
        });
        writer.write(`}`);
        return writer.toString();
    }
    render(api) {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = createWritter();
            writer.writeLine(`declare module 'swagger:${api.name}' {`);
            writer.indent(() => {
                writer.writeLine('import { ApiRequest, ApiResponse } from \'virtual:swagger/core\';');
                writer.writeLine(`export namespace Models {`);
                writer.indent(() => {
                    for (const [modelName, modelType] of Object.entries(api.models)) {
                        writer.writeLine(`export type ${modelName} = ${modelType};`);
                    }
                });
                writer.writeLine(`}`);
                writer.break();
                writer.writeLine(`export namespace Services {`);
                writer.indent(() => {
                    for (const service of api.services) {
                        writer.writeLine(`export class ${service.name} {`);
                        writer.indent(() => {
                            writer.writeLine(`constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);`);
                            for (const operation of service.operations) {
                                const params = this.renderOperationParams(operation.parameters);
                                const query = this.renderOperationParams(operation.queryParameters);
                                const renderOverload = (body) => {
                                    var _a, _b, _c;
                                    writer.writeLine(`/**`);
                                    if (operation.description) {
                                        writer.writeLine(` * ${operation.description}`);
                                        writer.writeLine(` *`);
                                    }
                                    writer.writeLine(` * @endpoint ${operation.method} ${service.baseUrl}${operation.path}`);
                                    if (body === null || body === void 0 ? void 0 : body.contentType) {
                                        writer.writeLine(` * @contentType ${body.contentType}`);
                                    }
                                    if ((_a = operation.see) === null || _a === void 0 ? void 0 : _a.length) {
                                        writer.writeLine(` *`);
                                        for (const see of operation.see) {
                                            writer.writeLine(` * @see ${see}`);
                                        }
                                    }
                                    for (const response of operation.responses) {
                                        writer.writeLine(` * @returns ${response.status} ${response.description}`);
                                    }
                                    writer.writeLine(` */`);
                                    writer.write(`${operation.id}(`, true);
                                    let hasPrevParam = false;
                                    if (params) {
                                        writer.write(`params: ${params}`);
                                        hasPrevParam = true;
                                    }
                                    if (query) {
                                        if (hasPrevParam) {
                                            writer.write(', ');
                                        }
                                        writer.write(`query: ${query}`);
                                    }
                                    if (body) {
                                        if (hasPrevParam) {
                                            writer.write(', ');
                                        }
                                        writer.write(`body: ${(_c = (_b = body.type) !== null && _b !== void 0 ? _b : body.schema) !== null && _c !== void 0 ? _c : 'any'}`);
                                    }
                                    writer.write(`): Promise<ApiResponse<${operation.responses.map(r => r.type).join(' | ') || 'void'}>>;`);
                                    writer.break();
                                };
                                if (operation.body.length) {
                                    operation.body.forEach(body => {
                                        renderOverload(body);
                                    });
                                }
                                else {
                                    renderOverload();
                                }
                                writer.break();
                            }
                        });
                        writer.writeLine(`}`);
                    }
                });
                writer.writeLine('}');
            });
            writer.writeLine('}');
            return writer.toString();
        });
    }
}
