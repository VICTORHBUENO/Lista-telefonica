import { randomUUID } from "crypto"


export class DatabaseMemory{
    #registros = new Map()

list(search){
    return Array.from(this.#registros.entries()).map((registroArray) => {
        const id = registroArray[0]

        const data = registroArray[1]

        return{
            id,
            ...data,
        }

        
        })
        .filter(registro => {
            if (search){
            return registro.titulo.includes(search)
            }
            return true
    })
}

    create(registro){
        const registroId = randomUUID()
        this.#registros.set(registroId, registro)
    }
    
    update(id, registro){
        this.#registros.set(id, registro)
    }

    delete(id, registro){
        this.#registros.delete(id, registro)
    }
}