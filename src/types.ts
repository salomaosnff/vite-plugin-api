export interface OperationBody {
    type?: string;
    schema?: string;
    contentType: string;
    required: boolean;
    description?: string;
}

export interface OperationResponse {
    type: string;
    contentType?: string;
    status: number;
    description?: string;
}

export interface OperationParameter {
    name: string;
    type: string;
    required?: boolean;
    description?: string;
}

export interface Operation {
    name: string;
    path: string;
    method: string;
    description?: string;
    parameters: OperationParameter[];
    queryParameters: OperationParameter[];
    body: OperationBody[]
    responses: OperationResponse[]
    see?: string[];
}

export interface Service {
    name: string;
    baseUrl: string;
    operations: Record<string, Operation>;
}

export interface ApiDocs {
    name: string;
    models: Record<string, string>;
    services: Service[];
}

export interface ApiDocsParser {
    parse(input: any): Promise<ApiDocs>;
}

export interface ApiDocsRenderer {
    render(api: ApiDocs): Promise<any>;
}