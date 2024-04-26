import type { Plugin } from "vite";
import axios from 'axios'
import { readFile, writeFile, appendFile } from 'fs/promises'
import { ApiDocs, ApiDocsParser, ApiDocsRenderer } from "./types";
import { DtsRenderer } from "./renderers/dts";
import { OpenAPIV3Parser } from "./generators/openapi3";
import { JsRenderer } from "./renderers/js";

const RESOLVE_ID = 'swagger:'

export interface SwaggerApiOptions {
    source: string;
    parser: ApiDocsParser;
    typesRenderer?: ApiDocsRenderer
    moduleRenderer?: ApiDocsRenderer
}

export type SwaggerApiDict = Record<string, SwaggerApiOptions>;

async function loadApi(api: SwaggerApiOptions): Promise<ApiDocs> {
    let data: any;
    if (api.source.startsWith('http')) {
        data = await axios.get(api.source).then(res => res.data)
    } else {
        data = JSON.parse(await readFile(api.source, 'utf8'))
    }

    const parser = api.parser ?? new OpenAPIV3Parser()

    return parser.parse(data)
}

export function SwaggerApi(apis: SwaggerApiDict, dts = 'src/swagger.d.ts'): Plugin {
    let apisMap: Record<string, Promise<ApiDocs>> = {}

    async function resolveApi(apiName:string) {
        console.debug(`Resolving Swagger API "${apiName}"...`)
        const typesRenderer = apis[apiName].typesRenderer ?? new DtsRenderer()
        const result = await loadApi(apis[apiName])
        
        result.name = apiName
        
        const types = await typesRenderer.render(result)

        await appendFile(dts, types)

        return result
    }

    return {
        name: 'swagger-api-ts',
        async buildStart() {
            let types = '';

            types += `declare module 'virtual:swagger/core' {\n`
            types += `  export interface ApiRequest {\n`
            types += `    url: URL;\n`
            types += `    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';\n`
            types += `    body?: any;\n`
            types += `  }\n`
            types += `  export interface ApiResponse<T> {\n`
            types += `    status: number;\n`
            types += `    data: T;\n`
            types += `    headers: Headers;\n`
            types += `  }\n`
            types += `}\n`
            

            await writeFile(dts, types)
        },
        async resolveId(source, importer, options) {
            if (source === 'virtual:swagger/core') {
                return source + ".ts"
            }

            if (!source.startsWith(RESOLVE_ID)) {
                return
            }

            const apiName = source.substring(RESOLVE_ID.length)

            if (!apis[apiName]) {
                return;
            }

            if (!apisMap[apiName]) {
                apisMap[apiName] = resolveApi(apiName)
            }
            
            return source
        },
        async load(id) {
            if (id === 'virtual:swagger/core.ts') {
                return `export {}`
            }

            if (!id.startsWith(RESOLVE_ID)) {
                return
            }
            
            const apiName = id.substring(RESOLVE_ID.length)
            const apiDocs = await apisMap[apiName]

            if (!apiDocs) {
                return
            }

            const moduleRenderer = apis[apiName].moduleRenderer ?? new JsRenderer()

            return moduleRenderer.render(apiDocs)
        },
    }
}

export * from './types'
export * from './generators/openapi3'
export * from './renderers/dts'
export * from './renderers/js'