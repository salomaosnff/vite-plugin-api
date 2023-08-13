import { readFile, writeFile } from 'fs/promises'
import { OpenAPIV3Parser } from './generators/openapi3'
import { JsRenderer } from './renderers/js'
import { DtsRenderer } from './renderers/dts'

const generator = new OpenAPIV3Parser({
    swaggerBaseUrl: 'https://api-erp-dev.lux-one.com/salesorders/swagger',
    apiBaseUrl: 'https://api-erp-dev.lux-one.com/salesorders',
})
const rendererJs = new JsRenderer()
const rendererTs = new DtsRenderer()

fetch('https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json')
.then(res => res.json())
// readFile('./openapi.json', 'utf-8')
// .then(data => JSON.parse(data))
.then(api => generator.parse(api))
.then((api) => {
    console.log(api.services[0].operations[1])
    return api
})
.then(api => Promise.all([
    rendererJs.render(api),
    rendererTs.render(api),
]))
.then(([js, ts]) => Promise.all([
    writeFile('swagger.js', js),
    writeFile('swagger.d.ts', ts),
]))
