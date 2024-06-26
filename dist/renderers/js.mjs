import { createWritter } from "../util.mjs";
export class JsRenderer {
  _indentation = 0;
  getHeaders(operation) {
  }
  async render(api) {
    const writer = createWritter();
    writer.writeLine(`async function fetchRequest(req) {`);
    writer.indent(() => {
      writer.writeLine(`const response = await fetch(req.url, req);`);
      writer.break();
      writer.writeLine(`if (!response.ok) {`);
      writer.indent(() => {
        writer.writeLine(`throw new Error(response.statusText);`);
      });
      writer.writeLine(`}`);
      writer.break();
      writer.writeLine(`return {`);
      writer.writeLine(`status: response.status,`);
      writer.writeLine(`body: await response.json(),`);
      writer.writeLine(`headers: response.headers,`);
      writer.writeLine(`}`);
    });
    writer.writeLine(`}`);
    writer.writeLine(`function joinUrl(base, path = '') {`);
    writer.indent(() => {
      writer.writeLine(`return new URL(path.replace(/^\\/+/, ''), base.replace(/\\/+$/, '')+'/')`);
    });
    writer.writeLine(`}`);
    writer.break();
    writer.writeLine(`function accept(body, contentTypes) {`);
    writer.indent(() => {
      writer.writeLine(`const headers = new Headers();`);
      writer.break();
      writer.writeLine(`for (const contentType of contentTypes) {`);
      writer.indent(() => {
        writer.writeLine(`if (contentType.includes('json') && typeof body === 'object') {`);
        writer.indent(() => {
          writer.writeLine(`body = JSON.stringify(body);`);
          writer.writeLine(`headers.set('Content-Type', contentType);`);
          writer.writeLine(`return { body, headers };`);
        });
        writer.writeLine(`}`);
        writer.break();
        writer.writeLine(`if (contentType === 'multipart/form-data' && body instanceof FormData) {`);
        writer.indent(() => {
          writer.writeLine(`return { body, headers };`);
        });
        writer.writeLine(`}`);
        writer.break();
        writer.writeLine(`if (contentType === 'application/x-www-form-urlencoded' && body instanceof URLSearchParams) {`);
        writer.indent(() => {
          writer.writeLine(`body = body.toString();`);
          writer.writeLine(`return { body, headers };`);
        });
        writer.writeLine(`}`);
      });
      writer.writeLine(`}`);
      writer.writeLine(`return { body, headers };`);
    });
    writer.writeLine(`}`);
    writer.break();
    writer.writeLine("function parseQuery(query) {");
    writer.indent(() => {
      writer.writeLine("const params = new URLSearchParams();");
      writer.break();
      writer.writeLine("for (const [key, values] of Object.entries(query)) {");
      writer.indent(() => {
        writer.writeLine("for (const value of [].concat(values)) {");
        writer.indent(() => {
          writer.writeLine("if (value !== undefined) {");
          writer.indent(() => {
            writer.writeLine("params.append(key, value);");
          });
          writer.writeLine("}");
        });
        writer.writeLine("}");
      });
      writer.writeLine("}");
      writer.break();
      writer.writeLine("return params");
    });
    writer.writeLine("}");
    writer.break();
    writer.writeLine(`export const Services = {`);
    writer.indent(() => {
      for (const service of api.services) {
        writer.writeLine(`${service.name}: class ${service.name} {`);
        writer.indent(() => {
          writer.writeLine(`constructor(request = fetchRequest) {`);
          writer.indent(() => {
            writer.writeLine(`this.request = request;`);
            writer.writeLine(`this.baseUrl = '${service.baseUrl}';`);
          });
          writer.writeLine(`}`);
          writer.break();
          for (const operation of service.operations) {
            writer.write(`${operation.id}(`, true);
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
              hasPrevParam = true;
            }
            if (operation.body.length) {
              if (hasPrevParam) {
                writer.write(", ");
              }
              writer.write(`data`);
              hasPrevParam = true;
            }
            if (hasPrevParam) {
              writer.write(", ");
            }
            writer.write(`req = {}`);
            hasPrevParam = true;
            writer.write(`) {`);
            writer.break();
            writer.indent(() => {
              if (operation.path && operation.parameters.length) {
                writer.writeLine(`const url = joinUrl(this.baseUrl${operation.path ? `, ${operation.parameters.length ? "`" + operation.path.replace(/\{(.+?)\}/g, "${params.$1}") + "`" : `'${operation.path}'`}` : ""});`);
              } else if (operation.path) {
                writer.writeLine(`const url = new URL(this.baseUrl+'${operation.path}');`);
              } else {
                writer.writeLine(`const url = new URL(this.baseUrl);`);
              }
              const contentTypes = new Set(operation.body.map((body) => body.contentType));
              if (operation.body.length > 0) {
                writer.writeLine(`const { body, headers } = accept(data, [${[...contentTypes].map((type) => JSON.stringify(type)).join(", ")}]);`);
              } else {
                writer.writeLine(`const headers = new Headers();`);
              }
              if (operation.queryParameters?.length) {
                writer.break();
                writer.writeLine("url.search = parseQuery(query).toString();");
              }
              writer.break();
              writer.writeLine(`return this.request({`);
              writer.indent(() => {
                writer.writeLine(`method: '${operation.method}',`);
                writer.writeLine(`url,`);
                if (operation.body.length) {
                  writer.writeLine(`body,`);
                }
                writer.writeLine(`headers,`);
              });
              writer.writeLine(`...req,`);
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
