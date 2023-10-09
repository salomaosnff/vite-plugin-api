import { ApiDocs, ApiDocsRenderer, OperationBody, OperationParameter } from "../types";
import { createWritter } from "../util";

export class DtsRenderer implements ApiDocsRenderer {
  _indentation = 0;

  renderOperationParams(params: OperationParameter[]) {
    if (params.length === 0) {
      return;
    }

    const writer = createWritter();

    writer.writeLine(`{`);
    writer.indent(() => {
      writer.writeLines(params.map(param => `${param.name}${param.required ? '' : '?'}: ${param.type};`));
    })
    writer.write(`}`);

    return writer.toString();
  }

  async render(api: ApiDocs): Promise<any> {
    const writer = createWritter();
    writer.writeLine(`declare module 'swagger:${api.name}' {`);
    writer.indent(() => {
      writer.writeLine('import { ApiRequest, ApiResponse } from \'virtual:swagger/core\';')
      writer.writeLine(`export namespace Models {`);
      writer.indent(() => {
        for (const [modelName, modelType] of Object.entries(api.models)) {
          writer.writeLine(`export type ${modelName} = ${modelType};`);
        }
      })
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

              const renderOverload = (body?: OperationBody) => {
                writer.writeLine(`/**`);
                if (operation.description) {
                  writer.writeLine(` * ${operation.description}`)
                  writer.writeLine(` *`);
                }
                writer.writeLine(` * @endpoint ${operation.method} ${service.baseUrl}${operation.path}`);

                if (body?.contentType) {
                  writer.writeLine(` * @contentType ${body.contentType}`)
                }

                if (operation.see?.length) {
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
                  hasPrevParam = true;
                }

                if (body) {
                  if (hasPrevParam) {
                    writer.write(', ');
                  }
                  writer.write(`body: ${body.type ?? body.schema ?? 'any'}`);
                  hasPrevParam = true;
                }

                if (hasPrevParam) {
                  writer.write(', ');
                }

                writer.write(`req?: any`);

                writer.write(`): Promise<ApiResponse<${operation.responses.map(r => r.type).join(' | ') || 'void'}>>;`);
                writer.break();
              }

              if (operation.body.length) {
                operation.body.forEach(body => {
                  renderOverload(body);
                })
              } else {
                renderOverload();
              }

              writer.break();
            }
          })
          writer.writeLine(`}`);
        }
      });
      writer.writeLine('}')
    })
    writer.writeLine('}');

    return writer.toString();
  }
}