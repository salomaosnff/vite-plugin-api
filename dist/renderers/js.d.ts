import { ApiDocs, ApiDocsRenderer, Operation } from "../types";
export declare class JsRenderer implements ApiDocsRenderer {
    _indentation: number;
    getHeaders(operation: Operation): void;
    render(api: ApiDocs): Promise<any>;
}
