import { randomUUID } from "crypto"


export class DatabaseMemory{
    #registro = new Map()

list(search){
    return Array.from(this.#registro.entries()).map((registroArray) => {
        const id = registroArray[0]

        const data = registroArray[1]

        return{
            id,
            ...data,
        }
        
    })
    .filter(telefone => {
        if (search){
        return telefone.titulo.includes(search)
        }
        return true
    })
}

    create(telefone){
        const telefoneid = randomUUID()
        this.#registro.set(telefoneid, telefone)
    }
    
    update(id, telefone){
        this.#registro.set(id,telefone)
    }

    delete(id, telefone){
        this.#registro.delete(id, telefone)
    }
}