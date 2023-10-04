import { defineConfig } from "vite";
import { OpenAPIV3Parser, SwaggerApi } from "../src";

export default defineConfig({
    plugins: [
        SwaggerApi({
            'petshop': {
                source: 'https://api-erp-dev.lux-one.com/agile/swagger/v1/swagger.json',
                parser: new OpenAPIV3Parser({
                    swaggerBaseUrl: 'https://api-erp-dev.lux-one.com/agile/swagger/',
                })
            }
        })
    ]
})
