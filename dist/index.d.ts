import type { Plugin } from "vite";
import { ApiDocsParser, ApiDocsRenderer } from "./types";
export interface SwaggerApiOptions {
    source: string;
    parser: ApiDocsParser;
    typesRenderer?: ApiDocsRenderer;
    moduleRenderer?: ApiDocsRenderer;
}
export type SwaggerApiDict = Record<string, SwaggerApiOptions>;
export declare function SwaggerApi(apis: SwaggerApiDict, dts?: string): Plugin;
export * from './types';
export * from './generators/openapi3';
export * from './renderers/dts';
export * from './renderers/js';
