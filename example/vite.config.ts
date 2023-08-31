import { defineConfig } from "vite";
import { OpenAPIV3Parser, SwaggerApi } from "../src";

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
