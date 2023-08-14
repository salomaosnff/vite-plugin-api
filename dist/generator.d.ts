import { OpenAPIV3 } from 'openapi-types';
export declare function hasInput(operation: OpenAPIV3.OperationObject): boolean;
export declare function parseResponse(contentType: string, response: OpenAPIV3.MediaTypeObject): any;
export declare function parseResponses(responses: OpenAPIV3.ResponsesObject): string;
export declare function generate(document: any, options: any): string;
export declare function generateTypes(document: OpenAPIV3.Document, options: any): string;
