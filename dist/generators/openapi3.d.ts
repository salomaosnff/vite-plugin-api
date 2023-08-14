import type { OpenAPIV3 } from "openapi-types";
import type { ApiDocs, ApiDocsParser, Operation, OperationBody, OperationParameter, OperationResponse, Service } from "../types";
export interface OpenAPIV3GeneratorOptions {
    swaggerBaseUrl?: string;
    apiBaseUrl?: string;
    getOperationName?(operation: Operation): string;
    getServiceName?(path: string, method: string, operation: OpenAPIV3.OperationObject): string;
}
export declare function getServiceBaseUrl(service: Service): string;
export declare function operationNameByPathAndMethod(path: string, method: string, actions?: Record<string, string>): string;
export declare class OpenAPIV3Parser implements ApiDocsParser {
    private options;
    constructor(options?: OpenAPIV3GeneratorOptions);
    getServiceName(path: string, method: string, operation: OpenAPIV3.OperationObject): string;
    getOperationName(operation: Operation): string;
    parseParameter(param: OpenAPIV3.ParameterObject): OperationParameter;
    parseBody(schema: OpenAPIV3.RequestBodyObject): OperationBody[];
    parseResponses(responses: OpenAPIV3.ResponsesObject): OperationResponse[];
    parseOperation(operation: OpenAPIV3.OperationObject): {
        parameters: OperationParameter[];
        queryParameters: OperationParameter[];
        body: OperationBody[];
        responses: OperationResponse[];
    };
    parse(input: OpenAPIV3.Document): Promise<ApiDocs>;
}
