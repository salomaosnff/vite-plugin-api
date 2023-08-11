import { Services } from 'swagger:petshop'

const service = new Services.Pet(async (req) => ({
    data: null as any,
    headers: new Headers(),
    status: 200,
}))

const res = await service.findPetsByStatus({
    status: 'available'
})

console.log(Services)