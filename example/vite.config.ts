import { defineConfig } from "vite";
import { OpenAPIV3Parser, SwaggerApi } from "../src";

export default defineConfig({
    plugins: [
        SwaggerApi({
            'petshop': {
                source: 'http://localhost:3000/docs/json',
                parser: new OpenAPIV3Parser({
                    swaggerBaseUrl: 'http://localhost:3000/docs',
                })
            }
        })
    ]
})
