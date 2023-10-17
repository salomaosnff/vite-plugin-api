import { Services } from 'swagger:petshop'

const service = new Services.Comments(async () => {
    debugger;

    return ({
        data: null as any,
        headers: new Headers(),
        status: 200,
    })
})

service.createComment({
    slug: 'test',
})

console.log(Services)