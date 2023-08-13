import { writeFile } from 'fs/promises'
import { OpenAPIV3Parser } from './generators/openapi3'
import { JsRenderer } from './renderers/js'
import { DtsRenderer } from './renderers/dts'

const generator = new OpenAPIV3Parser({
    swaggerBaseUrl: 'https://api-erp-dev.lux-one.com/productionsettings',
})
const renderer = new DtsRenderer()

fetch('https://api-erp-dev.lux-one.com/productionsettings/swagger/v1/swagger.json')
.then(res => res.json())
.then(api => generator.parse(api))
.then(api => renderer.render(api))
.then(result => writeFile('swagger.d.ts', result))
