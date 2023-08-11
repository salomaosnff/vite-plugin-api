import fs, { writeFile } from 'fs/promises'
import { generate } from './generator'
import { OpenAPIV3Parser } from './generators/openapi3'
import { DtsRenderer } from './renderers/dts'
import { JsRenderer } from './renderers/js'

const generator = new OpenAPIV3Parser({
    swaggerBaseUrl: 'https://api-erp-dev.lux-one.com/productionsettings',
})
const renderer = new JsRenderer()

fetch('https://api-erp-dev.lux-one.com/productionsettings/swagger/v1/swagger.json')
.then(res => res.json())
.then(api => generator.parse(api))
.then(api => renderer.render(api))
.then(result => writeFile('swagger.js', result))
