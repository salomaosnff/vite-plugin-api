import { defineConfig } from "vite";
import { SwaggerApi } from "../src/vite";
import { OpenAPIV3Parser } from "../src/generators/openapi3";

export default defineConfig({
    plugins: [
        SwaggerApi({
            'petshop': {
                source: 'https://petstore3.swagger.io/api/v3/openapi.json',
                parser: new OpenAPIV3Parser({
                    swaggerBaseUrl: 'https://petstore3.swagger.io/',
                })
            }
        })
    ]
})
