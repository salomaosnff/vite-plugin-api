import { createWritter } from "../util.mjs";
export class JsRenderer {
  _indentation = 0;
  getHeaders(operation) {
  }
  async render(api) {
    const writer = createWritter();
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
          writer.writeLine(`headers.set('Content-Type', contentType);`);
          writer.writeLine(`return { body, headers };`);
        });
        writer.writeLine(`}`);
        writer.break();
        writer.writeLine(`if (contentType === 'application/x-www-form-urlencoded' && body instanceof URLSearchParams) {`);
        writer.indent(() => {
          writer.writeLine(`body = body.toString();`);
          writer.writeLine(`headers.set('Content-Type', contentType);`);
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
      writer.writeLine("for (const [key, value] of Object.entries(query)) {");
      writer.indent(() => {
        writer.writeLine("params.append(key, value);");
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
          writer.writeLine(`constructor(request) {`);
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
            }
            if (operation.body.length) {
              if (hasPrevParam) {
                writer.write(", ");
              }
              writer.write(`data`);
            }
            writer.write(`) {`);
            writer.break();
            writer.indent(() => {
              writer.writeLine(`const url = joinUrl(this.baseUrl${operation.path ? `, ${operation.parameters.length ? "`" + operation.path.replace(/\{(.+?)\}/g, "${params.$1}") + "`" : `'${operation.path}'`}` : ""});`);
              const contentTypes = new Set(operation.body.map((body) => body.contentType));
              if (operation.body.length) {
                writer.writeLine(`const { body, headers } = accept(data, [${[...contentTypes].map((type) => JSON.stringify(type)).join(", ")}]);`);
              } else {
                writer.writeLine(`const headers = new Headers();`);
              }
              if (operation.queryParameters?.length) {
                writer.break();
                writer.writeLine("url.searchParams = parseQuery(query);");
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