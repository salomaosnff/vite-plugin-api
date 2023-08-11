import { Plugin } from 'vite';

interface OperationBody {
    type?: string;
    schema?: string;
    contentType: string;
    required: boolean;
    description?: string;
}
interface OperationResponse {
    type: string;
    contentType?: string;
    status: number;
    description?: string;
}
interface OperationParameter {
    name: string;
    type: string;
    required?: boolean;
    description?: string;
}
interface Operation {
    name: string;
    path: string;
    method: string;
    description?: string;
    parameters: OperationParameter[];
    queryParameters: OperationParameter[];
    body: OperationBody[];
    responses: OperationResponse[];
    see?: string[];
}
interface Service {
    name: string;
    baseUrl: string;
    operations: Record<string, Operation>;
}
interface ApiDocs {
    name: string;
    models: Record<string, string>;
    services: Service[];
}
interface ApiDocsParser {
    parse(input: any): Promise<ApiDocs>;
}
interface ApiDocsRenderer {
    render(api: ApiDocs): Promise<any>;
}

interface SwaggerApiOptions {
    source: string;
    parser: ApiDocsParser;
    typesRenderer?: ApiDocsRenderer;
    moduleRenderer?: ApiDocsRenderer;
}
type SwaggerApiDict = Record<string, SwaggerApiOptions>;
declare function SwaggerApi(apis: SwaggerApiDict): Plugin;

export { SwaggerApi, SwaggerApiDict, SwaggerApiOptions };
