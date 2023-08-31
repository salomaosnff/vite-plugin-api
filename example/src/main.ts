import { Services } from 'swagger:petshop'

const service = new Services.Pet(async () => ({
    data: null as any,
    headers: new Headers(),
    status: 200,
}))

service.findPetsByStatus({
    status: 'available'
})

console.log(Services)