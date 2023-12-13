import { fastify } from 'fastify'
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo'
})

server.post('/registro', (request, reply) => {
    //const body = request.body//
   //console.log(body)//
   const {contato, horario, duracao } = request.body
    database.create({
        contato: contato,
        horario: horario,
        duracao: duracao
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/registro', (request) => {
    const search = request.query.search

    const registros = database.list(search)

    return registros
})

server.put('/registro/:id', (request, reply) => {

    const registroId = request.params.id
    const {contato, horario, duracao} = request.body
    const registro = database.update(registroId, {
        contato,
        horario,
        duracao,
    })
    return reply.status(204).send()
})

server.delete('/registro/:id', (request, reply) => {
    const registroId = request.params.id

    database.delete(registroId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})