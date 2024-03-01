import request from 'supertest'
import { afterEach, beforeEach, describe, expect } from '@jest/globals'
import app from "../../app"

let server;
beforeEach(()=> { //Inicia uma routa para os testes
    const port = 3000
    server = app.listen(port)
})


afterEach(() =>{ //Fecha essa rota quando terminar
    server.close()
})

let autorId;




describe("GET em '/autores' ", () => {
    test("Deve retornar todos os autores", async () => {
        const response = await request(app) //seta um request para as rotas
        .get('/artistas') 
        .set('Accept', 'application/json')
         .expect('content-type', /json/) // Esperando que a resposta seja json
         .expect(200) //Esperando que o status da resposta seja 200 OK       
 
         expect(response).not.toBeNull();
     })
 
     test("Deve retornar o autor com id 3", async () => {
         const response = await request(app)
         .get("/autores/3")
         .set('Accept', 'application/json')
         .expect('content-type', /json/)
         .expect(200)
         
 
         expect(response.body.content.nome).toBe('Machado de Assis')
     })
 
     test("Deve retornar um erro de id não existe", async () => {
         const response = await request(app)
         .get("/autores/3890")
         .set("Accept", "application/json")
         .expect('content-type', /json/)
         .expect(500)
 
 
         expect(response.body.message).toBe("ID não existe no Banco!")
 
     })
})

describe("POST em '/autores' ", () => {
    test("Deve retornar erro de falta body", async () => {
        const response = await request(app)
        .post("/autores")
        .set("Accept", "application/json")
        .send()
        .expect('content-type', /json/)
        .expect(400)

        expect(response.body.message).toBe("Necessario corpo da requisiçao!")
    })

    test("Erro de falta de informacao", async() => {
        const body = {
            //nome : "Rob Liefeld ",
            nacionalidade : "Canadense",
            idade : 78
        }

        const response = await request(app)
        .post("/autores")
        .set("Accept", "application/json")
        .send(body)
        .expect('content-type', /json/)
        .expect(500)



        expect(response.body.message).toBe("notNull Violation: Necessario nome para criaçao!")
    })

    test("Deve retornar o novo autor", async() => {
        const body = {
            nome : "Rob Liefeld ",
            nacionalidade : "Canadense",
            idade : 78
        }

        const response = await request(app)
        .post("/autores")
        .set("Accept", "application/json")
        .send(body)
        .expect('content-type', /json/)
        .expect(201)
        

        expect(response.body.content.nome).toBe(body.nome)
        autorId = response.body.content.id
    })
}) 


describe("PUT em '/autores' ",() => {
    test("Deve retorna erro por falta de corpo para atualizar", async () => {
        const response = await request(app)
        .put('/autores/6')
        .set('Accept', 'application/json')
        .send({})
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body.message).toBe('Corpo da requisicao vazio')
    })

    test("Deve atualizar o nome do autor", async () => {
        const response = await request(app)
        .put(`/autores/${autorId}`)
        .set("Accept", "application/json")
        .send({nome : "Jorge Lucas"})
        .expect('content-type', /json/)
        .expect(201)


        expect(response.body.content.nome).toBe("Jorge Lucas")

    })
})





describe("DELETE em '/autores' ", () => {
    test("Deve excluir um autor e retonar 1", async() => {
        const response = await request(app)
        .delete(`/autores/${autorId}`)
        .set("Accept", "application/json")
        .expect('content-type', /json/)
        .expect(200)

    expect(response.body.content).toBe(1)
    })

    test("Deve retornar um erro por id invalido", async () => {
        const response = await request(app)
        .delete(`/autores/59780`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)
    
        expect(response.body.message).toBe("Id não encontrado!")
       })
})
