import { writeFile } from 'fs/promises'
import { OpenAPIV3Parser, JsRenderer } from './src'

const generator = new OpenAPIV3Parser({
    apiBaseUrl: 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json',
})
const render = new JsRenderer()

fetch('https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json')
.then(res => res.json())
.then(data => generator.parse(data))
.then(api => render.render(api))
.then(code => writeFile('./api.js', code))