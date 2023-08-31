import axios from "axios";
import { readFile, writeFile } from "fs/promises";
import * as prettier from "prettier";
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
      for (const apiName in apis) {
        console.debug(`Loading Swagger API "${apiName}"...`);
        const typesRenderer = apis[apiName].typesRenderer ?? new DtsRenderer();
        apisMap[apiName] = await loadApi(apis[apiName]);
        apisMap[apiName].name = apiName;
        types += await typesRenderer.render(apisMap[apiName]);
      }
      types = await prettier.format(types, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        printWidth: 120
      });
      writeFile("src/swagger.d.ts", types);
    },
    resolveId(source, importer, options) {
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
      const moduleRenderer = apis[apiName].moduleRenderer ?? new JsRenderer();
      return moduleRenderer.render(apisMap[apiName]);
    }
  };
}
export * from "./types.mjs";
export * from "./generators/openapi3.mjs";
export * from "./renderers/dts.mjs";
export * from "./renderers/js.mjs";
