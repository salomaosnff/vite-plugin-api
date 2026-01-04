import { camelCase, pascalCase } from "change-case";
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
  if (schema.type === "boolean") {
    return "boolean";
  }
  if (schema.type === "array") {
    return `${parseSchema(schema.items)}[]`;
  }
  if (schema.type === "object") {
    return "{" + Object.entries(schema.properties || {}).map(([name, s]) => {
      const key = name.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/) ? name : JSON.stringify(name);
      const mandatory = s.required || schema.required?.includes(name) ? "" : "?";
      return `${key}${mandatory}: ${parseSchema(s)}`;
    }).join(",\n") + "}";
  }
  if (schema.type === "integer" || schema.type === "number") {
    return "number";
  }
}
function getBasePath(paths) {
  const pathArr = paths.map((path) => path.split("/"));
  const base = pathArr[0].filter((dir, i) => pathArr.every((p) => p[i] === dir)).join("/");
  const firstParamIndex = base.indexOf("{");
  if (firstParamIndex === -1) {
    return base;
  }
  return base.slice(0, firstParamIndex);
}
export function getServiceBaseUrl(service) {
  return getBasePath(Object.values(service.operations).map((operation) => operation.path)).replace(/\/+$/, "");
}
export function operationNameByPathAndMethod(path, method, actions = {
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
export class OpenAPIV3Parser {
  constructor(options = {}) {
    this.options = options;
  }
  getServiceName(path, method, operation) {
    return this.options.getServiceName?.(path, method, operation) || pascalCase(operation.tags?.[0]) || "ApiService";
  }
  getOperationName(operation) {
    return this.options.getOperationName?.(operation) ?? (operation.id ? camelCase(operation.id) : operationNameByPathAndMethod(operation.path, operation.method));
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
    function genResponseId(code, type) {
      return `${code}_${type}`;
    }
    const responsed = /* @__PURE__ */ new Set();
    for (const [code, response] of Object.entries(responses)) {
      if (!response.content) {
        const id = genResponseId(parseInt(code), "void");
        if (responsed.has(id)) continue;
        bodies.push({
          status: parseInt(code),
          contentType: "",
          type: "void",
          description: response.description
        });
        continue;
      }
      for (const [contentType, content] of Object.entries(response.content || {})) {
        const status = parseInt(code);
        const type = parseSchema(content.schema);
        const id = genResponseId(status, type);
        if (responsed.has(id)) continue;
        bodies.push({
          status,
          contentType,
          type,
          description: response.description
        });
        responsed.add(id);
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
        const serviceName = this.getServiceName(path, method, operation);
        const service = serviceMap.get(serviceName) ?? {
          name: serviceName,
          baseUrl: "",
          operations: []
        };
        const { body, responses, parameters, queryParameters } = this.parseOperation(operation);
        service.operations.push({
          id: operation.operationId ?? null,
          description: operation.description,
          body,
          method: method.toUpperCase(),
          parameters,
          path,
          queryParameters,
          responses,
          see: operation.operationId && this.options.swaggerBaseUrl ? operation.tags.map((tag) => `${this.options.swaggerBaseUrl}#/${tag}/${operation.operationId}`) : []
        });
        serviceMap.set(serviceName, service);
      }
    }
    for (const service of serviceMap.values()) {
      service.baseUrl = getServiceBaseUrl(service);
      for (const operation of service.operations) {
        if (operation.path === service.baseUrl || operation.path.startsWith(service.baseUrl + "/")) {
          operation.path = operation.path.slice(service.baseUrl.length);
        }
        operation.id = this.getOperationName(operation);
        service.operations[operation.id] = operation;
      }
      service.baseUrl = (this.options.apiBaseUrl ?? this.options.swaggerBaseUrl ?? "").replace(/\/+$/, "") + service.baseUrl;
      docs.services.push(service);
    }
    return docs;
  }
}
