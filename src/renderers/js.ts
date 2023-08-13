import { ApiDocs, ApiDocsRenderer, OperationBody, OperationParameter } from "../types";
import { createWritter } from "../util";

export class JsRenderer implements ApiDocsRenderer {
    _indentation = 0;

    async render(api: ApiDocs): Promise<any> {
        const writer = createWritter();

        writer.writeLine(`function toUrl(base, path = '', params = {}) {`);
        writer.indent(() => {
            writer.writeLine(`return new URL(path.replace(/^\\/\\/+/, '').replaceAll(/\\{(.+?)\\}/g, (_, p) => encodeURIComponent(params[p])), base)`);
        })
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
                    })
                    writer.writeLine(`}`);

                    for (const operation of service.operations) {
                        writer.write(`${operation.id}(`, true);

                        let hasPrevParam = false;

                        if (operation.parameters.length) {
                            writer.write(`params`);
                            hasPrevParam = true;
                        }

                        if (operation.queryParameters.length) {
                            if (hasPrevParam) {
                                writer.write(', ');
                            }
                            writer.write(`query`);
                        }

                        if (operation.body.length) {
                            if (hasPrevParam) {
                                writer.write(', ');
                            }
                            writer.write(`body`);
                        }

                        writer.write(`) {`);
                        writer.break();
                        writer.indent(() => {
                            writer.writeLine(`const url = toUrl(this.baseUrl${operation.path ? `, '${operation.path}'` : ''}${operation.parameters?.length ? ', params' : ''});`);
                            
                            if (operation.queryParameters?.length) {
                                writer.writeLine('url.search = new URLSearchParams(query).toString();');
                                writer.break();
                            }

                            writer.writeLine(`return this.request({`);
                            writer.indent(() => {
                                writer.writeLine(`method: '${operation.method}',`);
                                writer.writeLine(`url,`);
                                if (operation.body.length) {
                                    writer.writeLine(`body,`);
                                }
                            })
                            writer.writeLine(`});`);
                        })
                        writer.writeLine('}')
                        writer.break();
                    }
                })
                writer.writeLine(`},`);
            }
        });
        writer.writeLine('}')

        return writer.toString();
    }
}