import axios from 'axios';
import { writeFile, readFile } from 'fs/promises';
import * as prettier from 'prettier';
import { pascalCase, camelCase } from 'change-case';
import { randomUUID } from 'crypto';

function createWritter() {
  let result = "";
  let indentation = 0;
  return {
    toString() {
      return result;
    },
    write(data, indent = false) {
      if (indent) {
        result += " ".repeat(indentation * 2);
      }
      result += data;
      return this;
    },
    writeLine(data) {
      return this.write(data, true).write("\n");
    },
    writeLines(data) {
      data.forEach((line) => this.writeLine(line));
      return this;
    },
    indent(callback) {
      indentation++;
      callback();
      indentation--;
      return this;
    },
    break() {
      return this.write("\n");
    }
  };
}

class DtsRenderer {
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
      writer.writeLines(params.map((param) => `${param.name}${param.required ? "" : "?"}: ${param.type};`));
    });
    writer.write(`}`);
    return writer.toString();
  }
  async render(api) {
    const writer = createWritter();
    writer.writeLine(`declare module 'swagger:${api.name}' {`);
    writer.indent(() => {
      writer.writeLine("import { ApiRequest, ApiResponse } from 'virtual:swagger/core';");
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
            for (const [name, operation] of Object.entries(service.operations)) {
              const params = this.renderOperationParams(operation.parameters);
              const query = this.renderOperationParams(operation.queryParameters);
              const renderOverload = (body) => {
                writer.writeLine(`/**`);
                if (operation.description) {
                  writer.writeLine(` * ${operation.description}`);
                  writer.writeLine(` *`);
                }
                writer.writeLine(` * @endpoint ${service.baseUrl}${operation.path}`);
                writer.writeLine(` * @method ${operation.method}`);
                if (operation.see?.length) {
                  writer.writeLine(` *`);
                  for (const see of operation.see) {
                    writer.writeLine(` * @see ${see}`);
                  }
                }
                for (const response of operation.responses) {
                  writer.writeLine(` * @returns {${response.type}} ${response.status} ${response.description}`);
                }
                writer.writeLine(` */`);
                writer.write(`${name}(`, true);
                let hasPrevParam = false;
                if (params) {
                  writer.write(`params: ${params}`);
                  hasPrevParam = true;
                }
                if (query) {
                  if (hasPrevParam) {
                    writer.write(", ");
                  }
                  writer.write(`query: ${query}`);
                }
                if (body) {
                  if (hasPrevParam) {
                    writer.write(", ");
                  }
                  writer.write(`body: ${body.type ?? body.schema ?? "any"}`);
                }
                writer.write(`): Promise<ApiResponse<${operation.responses.map((r) => r.type).join(" | ") || "void"}>>;`);
                writer.break();
              };
              if (operation.body.length) {
                operation.body.forEach((body) => {
                  renderOverload(body);
                });
              } else {
                renderOverload();
              }
              writer.break();
            }
          });
          writer.writeLine(`}`);
        }
      });
      writer.writeLine("}");
    });
    writer.writeLine("}");
    return writer.toString();
  }
}

function parseSchema(schema) {
  if ("$ref" in schema) {
    return "Models." + schema.$ref.split("/").pop();
  }
  if (schema.enum) {
    return schema.enum.map((v) => JSON.stringify(v)).join(" | ");
  }
  if (schema.type === "string") {
    return "string";
  }
  if (schema.type === "array") {
    return `${parseSchema(schema.items)}[]`;
  }
  if (schema.type === "object") {
    return "{" + Object.entries(schema.properties || {}).map(([name, schema2]) => `${name}${schema2.required ? "" : "?"}: ${parseSchema(schema2)}`).join(",\n") + "}";
  }
  if (schema.type === "integer" || schema.type === "number") {
    return "number";
  }
}
function getBasePath(paths) {
  const pathArr = paths.map((path) => path.split("/"));
  const base = pathArr[0].filter((dir, i) => pathArr.every((p) => p[i] === dir));
  return base.join("/");
}
function getServiceBaseUrl(service) {
  return getBasePath(Object.values(service.operations).map((operation) => operation.path)).replace(/\/+$/, "");
}
function operationNameByPathAndMethod(path, method, actions = {
  get: "get",
  post: "create",
  put: "replace",
  delete: "delete",
  patch: "update"
}) {
  const action = actions[method.toLowerCase()] ?? method.toLowerCase();
  const name = path.replace(/\{(.+?)\}/g, (_, p) => "By" + pascalCase(p)).replace(/\/+/g, " ");
  return camelCase(`${action} ${name}`);
}
class OpenAPIV3Parser {
  constructor(options = {}) {
    this.options = options;
  }
  getServiceName(path, method, operation) {
    return this.options.getServiceName?.(path, method, operation) || pascalCase(operation.tags?.[0]) || "ApiService";
  }
  getOperationName(path, method, operation) {
    return this.options.getOperationName?.(path, method, operation) || operationNameByPathAndMethod(path, method) || `${method}${path.replace(/\//g, "_")}`;
  }
  parseParameter(param) {
    return {
      name: param.name,
      required: param.required,
      type: parseSchema(param.schema),
      description: param.description
    };
  }
  parseBody(schema) {
    if (!schema?.content) {
      return [];
    }
    const bodies = [];
    for (const [contentType, content] of Object.entries(schema.content)) {
      if (contentType.includes("json")) {
        bodies.push({
          required: schema.required,
          contentType,
          schema: parseSchema(content.schema),
          description: schema.description
        });
        continue;
      }
      if (contentType.includes("form-data")) {
        bodies.push({
          required: schema.required,
          contentType,
          type: "FormData",
          schema: parseSchema(content.schema),
          description: schema.description
        });
        continue;
      }
      if (contentType.includes("x-www-form-urlencoded")) {
        bodies.push({
          required: schema.required,
          contentType,
          type: "URLSearchParams",
          schema: parseSchema(content.schema),
          description: schema.description
        });
        continue;
      }
    }
    return bodies;
  }
  parseResponses(responses) {
    const bodies = [];
    for (const [code, response] of Object.entries(responses)) {
      for (const [contentType, content] of Object.entries(response.content || {})) {
        if (contentType.includes("json")) {
          bodies.push({
            status: parseInt(code),
            contentType,
            type: parseSchema(content.schema),
            description: response.description
          });
          break;
        }
      }
    }
    return bodies;
  }
  parseOperation(operation) {
    const parameters = [];
    const queryParameters = [];
    for (const param of operation.parameters || []) {
      const item = this.parseParameter(param);
      if (param.in === "query") {
        queryParameters.push(item);
      } else {
        parameters.push(item);
      }
    }
    return {
      parameters,
      queryParameters,
      body: this.parseBody(operation.requestBody),
      responses: this.parseResponses(operation.responses)
    };
  }
  async parse(input) {
    const docs = {
      name: "",
      models: {},
      services: []
    };
    const serviceMap = /* @__PURE__ */ new Map();
    for (const [name, schema] of Object.entries(input.components?.schemas || {})) {
      docs.models[name] = parseSchema(schema);
    }
    for (const [path, pathItem] of Object.entries(input.paths)) {
      for (const [method, operation] of Object.entries(pathItem)) {
        const operationId = operation.operationId ?? "\0" + randomUUID();
        const serviceName = this.getServiceName(path, method, operation);
        const service = serviceMap.get(serviceName) ?? {
          name: serviceName,
          baseUrl: "",
          operations: {}
        };
        const { body, responses, parameters, queryParameters } = this.parseOperation(operation);
        service.operations[operationId] = {
          name: operationId,
          description: operation.description,
          body,
          method: method.toUpperCase(),
          parameters,
          path,
          queryParameters,
          responses,
          see: operation.operationId && this.options.swaggerBaseUrl ? operation.tags.map((tag) => `${this.options.swaggerBaseUrl}#/${tag}/${operation.operationId}`) : []
        };
        serviceMap.set(serviceName, service);
      }
    }
    for (const service of serviceMap.values()) {
      service.baseUrl = getServiceBaseUrl(service);
      for (const operation of Object.values(service.operations)) {
        if (operation.path === service.baseUrl || operation.path.startsWith(service.baseUrl + "/")) {
          operation.path = operation.path.slice(service.baseUrl.length);
        }
        const operationId = operation.name.startsWith("\0") ? this.getOperationName(operation.path, operation.method, operation) : operation.name;
        if (operation.name !== operationId) {
          delete service.operations[operation.name];
          operation.name = operationId;
          service.operations[operationId] = operation;
        }
      }
      docs.services.push(service);
    }
    return docs;
  }
}

class JsRenderer {
  constructor() {
    this._indentation = 0;
  }
  async render(api) {
    const writer = createWritter();
    writer.writeLine(`function toUrl(base, path = '', params = {}) {`);
    writer.indent(() => {
      writer.writeLine(`return new URL(path.replace(/^\\/\\/+/, '').replaceAll(/\\{(.+?)\\}/g, (_, p) => encodeURIComponent(params[p])), base)`);
    });
    writer.writeLine(`}`);
    writer.break();
    writer.writeLine(`export const Services = {`);
    writer.indent(() => {
      for (const service of api.services) {
        writer.writeLine(`${service.name}: class ${service.name} {`);
        writer.indent(() => {
          writer.writeLine(`constructor(request) {`);
          writer.indent(() => {
            writer.writeLine(`this.request = request;`);
            writer.writeLine(`this.baseUrl = '${service.baseUrl}';`);
          });
          writer.writeLine(`}`);
          for (const [name, operation] of Object.entries(service.operations)) {
            writer.write(`${name}(`, true);
            let hasPrevParam = false;
            if (operation.parameters.length) {
              writer.write(`params`);
              hasPrevParam = true;
            }
            if (operation.queryParameters.length) {
              if (hasPrevParam) {
                writer.write(", ");
              }
              writer.write(`query`);
            }
            if (operation.body.length) {
              if (hasPrevParam) {
                writer.write(", ");
              }
              writer.write(`body`);
            }
            writer.write(`) {`);
            writer.break();
            writer.indent(() => {
              writer.writeLine(`const url = toUrl(this.baseUrl${operation.path ? `, '${operation.path}'` : ""}${operation.parameters?.length ? ", params" : ""});`);
              if (operation.queryParameters?.length) {
                writer.writeLine("url.search = new URLSearchParams(query).toString();");
                writer.break();
              }
              writer.writeLine(`return this.request({`);
              writer.indent(() => {
                writer.writeLine(`method: '${operation.method}',`);
                writer.writeLine(`url,`);
                if (operation.body.length) {
                  writer.writeLine(`body,`);
                }
              });
              writer.writeLine(`});`);
            });
            writer.writeLine("}");
            writer.break();
          }
        });
        writer.writeLine(`},`);
      }
    });
    writer.writeLine("}");
    return writer.toString();
  }
}

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
function SwaggerApi(apis) {
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
      types += `    method: string;
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

export { SwaggerApi };
