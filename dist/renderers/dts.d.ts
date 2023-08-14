import { ApiDocs, ApiDocsRenderer, OperationParameter } from "../types";
export declare class DtsRenderer implements ApiDocsRenderer {
    _indentation: number;
    renderOperationParams(params: OperationParameter[]): string;
    render(api: ApiDocs): Promise<any>;
}
