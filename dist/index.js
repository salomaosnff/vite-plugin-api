var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { readFile, writeFile } from 'fs/promises';
import * as prettier from 'prettier';
import { DtsRenderer } from "./renderers/dts";
import { OpenAPIV3Parser } from "./generators/openapi3";
import { JsRenderer } from "./renderers/js";
const RESOLVE_ID = 'swagger:';
function loadApi(api) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        if (api.source.startsWith('http')) {
            data = yield axios.get(api.source).then(res => res.data);
        }
        else {
            data = JSON.parse(yield readFile(api.source, 'utf8'));
        }
        const parser = (_a = api.parser) !== null && _a !== void 0 ? _a : new OpenAPIV3Parser();
        return parser.parse(data);
    });
}
export function SwaggerApi(apis) {
    let apisMap = {};
    return {
        name: 'swagger-api-ts',
        buildStart() {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                let types = '';
                types += `declare module 'virtual:swagger/core' {\n`;
                types += `  export interface ApiRequest {\n`;
                types += `    url: URL;\n`;
                types += `    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';\n`;
                types += `    body?: any;\n`;
                types += `  }\n`;
                types += `  export interface ApiResponse<T> {\n`;
                types += `    status: number;\n`;
                types += `    data: T;\n`;
                types += `    headers: Headers;\n`;
                types += `  }\n`;
                types += `}\n`;
                for (const apiName in apis) {
                    console.debug(`Loading Swagger API "${apiName}"...`);
                    const typesRenderer = (_a = apis[apiName].typesRenderer) !== null && _a !== void 0 ? _a : new DtsRenderer();
                    apisMap[apiName] = yield loadApi(apis[apiName]);
                    apisMap[apiName].name = apiName;
                    types += yield typesRenderer.render(apisMap[apiName]);
                }
                types = yield prettier.format(types, {
                    parser: 'typescript',
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'all',
                    arrowParens: 'always',
                    printWidth: 120,
                });
                writeFile('src/swagger.d.ts', types);
            });
        },
        resolveId(source, importer, options) {
            if (source === 'virtual:swagger/core') {
                return source + ".ts";
            }
            if (!source.startsWith(RESOLVE_ID)) {
                return;
            }
            const apiName = source.substring(RESOLVE_ID.length);
            if (!apis[apiName]) {
                return;
            }
            return source;
        },
        load(id) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if (id === 'virtual:swagger/core.ts') {
                    return `export {}`;
                }
                if (!id.startsWith(RESOLVE_ID)) {
                    return;
                }
                const apiName = id.substring(RESOLVE_ID.length);
                const moduleRenderer = (_a = apis[apiName].moduleRenderer) !== null && _a !== void 0 ? _a : new JsRenderer();
                return moduleRenderer.render(apisMap[apiName]);
            });
        },
    };
}
export * from './types';
export * from './generators/openapi3';
export * from './renderers/dts';
export * from './renderers/js';
