import request from 'supertest'
import { afterEach, beforeEach, describe, expect } from '@jest/globals'
import app from "../../app"

let server;
beforeEach(()=> { //Inicia uma routa para os testes
    const port = 3010
    server = app.listen(port)
})


afterEach(() =>{ //Fecha essa rota quando terminar
    server.close()
})


describe("GET em '/artistas' ", () => {
    test('Deve retornar todos os artista', async () => {
        const response = await request(app)
        .get('/artistas')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)

        expect(response.body.message).toBe("Todos os artista no banco")

    })

    test("Deve retornar erro por id nao encontrado", async () => {
        const response = await request(app)
        .get('/artistas/8736')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(400)

        expect(response.body.message).toBe('Id não encontrado!')
    })
    
})

let artistaID;
describe("POST em '/artistas'" , () => {
    test("Deve retornar erro por falta de body", async () =>{ 
        const response = await request(app)
        .post('/artistas')
        .set('Accept', 'application/json')
        .send()
        .expect('content-type', /json/)
        .expect(400)

        expect(response.body.message).toBe('Necessario corpo da requisiçao!')

    })

    test("Deve retornar erro por falta de informacao", async () => {

        const body = {
            nome: "Manuel Gomes",
            //nacionalidade: "Nordestino",
            idade: 45
        }
        const response = await request(app)
        .post('/artistas')
        .set('Accept', 'application/json')
        .send(body)
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body.message).toBe("notNull Violation: Necessario nacionalidade para criaçao!")
    })

    test("Deve retornar um novo artista", async() => {
        const body = {
            nome: "Manuel Gomes",
            nacionalidade: "Nordestino",
            idade: 45
        }
        const response = await request(app)
        .post('/artistas')
        .set('Accept', 'application/json')
        .send(body)
        .expect('content-type', /json/)
        .expect(201)


        expect(response.body.content.nome).toBe("Manuel Gomes")
        artistaID = response.body.content.id
    })
})


describe("PUT em '/artistas' ", () => {
    test("Deve retorna erro por falta de corpo para atualizar", async () => {
        const response = await request(app)
        .put('/artistas/6')
        .set('Accept', 'application/json')
        .send({})
        .expect('content-type', /json/)
        .expect(400)

        expect(response.body.message).toBe('Necessario corpo da requisiçao!')
    })

    test("Deve retornar o nome do artista atulizado", async () => {
        const response = await request(app)
        .put(`/artistas/${artistaID}`)
        .set('Accept', 'application/json')
        .send({idade: 44})
        .expect('content-type', /json/)
        .expect(202)

        expect(response.body.content.idade).toBe(44)
    })
})

describe("DELETE em '/artistas' ", () => {
   test("Deve deletar um artista", async() => {
    const response = await request(app)
    .delete(`/artistas/${artistaID}`)
    .set('Accept', 'application/json')
    .expect('content-type', /json/)
    .expect(202)

    expect(response.body.message).toBe("Artista removido")
   })

})
