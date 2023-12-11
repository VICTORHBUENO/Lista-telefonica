import { randomUUID } from "crypto"


export class DatabaseMemory{
    #TELEFONE = new Map()

list(search){
    return Array.from(this.#TELEFONE.entries()).map((TELEFONEArray) => {
        const id = TELEFONEArray[0]

        const data = TELEFONEArray[1]

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
        this.#TELEFONE.set(telefoneid, telefone)
    }
    
    update(id, telefone){
        this.#TELEFONE.set(id,telefone)
    }

    delete(id, telefone){
        this.#TELEFONE.delete(id, telefone)
    }
}