import axios from "axios";
import { readFile, writeFile, appendFile } from "fs/promises";
import { DtsRenderer } from "./renderers/dts.mjs";
import { OpenAPIV3Parser } from "./generators/openapi3.mjs";
import { JsRenderer } from "./renderers/js.mjs";
const RESOLVE_ID = "swagger:";
async function loadApi(api) {
  let data;
  if (api.source.startsWith("http")) {
    data = await axios.get(api.source).then((res) => res.data);
  } else {
    data = JSON.parse(await readFile(api.source, "utf8"));
  }
  const parser = api.parser ?? new OpenAPIV3Parser();
  return parser.parse(data);
}
export function SwaggerApi(apis) {
  let apisMap = {};
  async function resolveApi(apiName) {
    console.debug(`Resolving Swagger API "${apiName}"...`);
    const typesRenderer = apis[apiName].typesRenderer ?? new DtsRenderer();
    const result = await loadApi(apis[apiName]);
    result.name = apiName;
    const types = await typesRenderer.render(result);
    await appendFile("src/swagger.d.ts", types);
    return result;
  }
  return {
    name: "swagger-api-ts",
    async buildStart() {
      let types = "";
      types += `declare module 'virtual:swagger/core' {
`;
      types += `  export interface ApiRequest {
`;
      types += `    url: URL;
`;
      types += `    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
`;
      types += `    body?: any;
`;
      types += `  }
`;
      types += `  export interface ApiResponse<T> {
`;
      types += `    status: number;
`;
      types += `    data: T;
`;
      types += `    headers: Headers;
`;
      types += `  }
`;
      types += `}
`;
      await writeFile("src/swagger.d.ts", types);
    },
    async resolveId(source, importer, options) {
      if (source === "virtual:swagger/core") {
        return source + ".ts";
      }
      if (!source.startsWith(RESOLVE_ID)) {
        return;
      }
      const apiName = source.substring(RESOLVE_ID.length);
      if (!apis[apiName]) {
        return;
      }
      if (!apisMap[apiName]) {
        apisMap[apiName] = resolveApi(apiName);
      }
      return source;
    },
    async load(id) {
      if (id === "virtual:swagger/core.ts") {
        return `export {}`;
      }
      if (!id.startsWith(RESOLVE_ID)) {
        return;
      }
      const apiName = id.substring(RESOLVE_ID.length);
      const apiDocs = await apisMap[apiName];
      if (!apiDocs) {
        return;
      }
      const moduleRenderer = apis[apiName].moduleRenderer ?? new JsRenderer();
      return moduleRenderer.render(apiDocs);
    }
  };
}
export * from "./types.mjs";
export * from "./generators/openapi3.mjs";
export * from "./renderers/dts.mjs";
export * from "./renderers/js.mjs";
