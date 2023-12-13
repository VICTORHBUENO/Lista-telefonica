import { fastify } from 'fastify'
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo'
})

server.post('/telefone', (request, reply) => {
    //const body = request.body//
   //console.log(body)//
   const {Nome: hora, Número,duraçao } = request.body
    database.create({
        Número: Número,
        hora: hora,
        duraçao: duraçao,
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/telefone', (request) => {
    const search = request.query.search

    console.log(search)
    
    const telefone = database.list(search)
   
    return telefone
})

server.put('/telefone/:id', (request, reply) => {

    const telefoneid = request.params.id
    const { Nome,Número} = request.body
    const telefone = database.update(telefoneid, {
        Nome: Nome,
        Número: Número,

    })
    return reply.status(204).send()
})

server.delete('/telefone/:id', (request, reply) => {
    const telefoneid = request.params.id

    database.delete(telefoneId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})