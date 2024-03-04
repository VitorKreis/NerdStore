import request from 'supertest'
import { afterEach, beforeEach, describe, expect } from '@jest/globals'
import app from "../../app"

let server;
beforeEach(()=> { //Inicia uma routa para os testes
    const port = 3020
    server = app.listen(port)
})


afterEach(() =>{ //Fecha essa rota quando terminar
    server.close()
})


let livro_id;

describe("GET em '/livros' ", () => {
    test("Deve retornar todos os livros e seus autores", async () =>{
        const response = await request(app)
        .get('/livros')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)

        expect(response.body.content).not.toBeNull();

        expect(response.body.content[0].Autor.nome).not.toBeNull();
    })



    test("Deve retornar um livro", async () => {
        const response = await request(app)
        .get('/livros/2')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)

  
        expect(response.body.content.titulo).toBe("Senhor do Aneis: A Socidade do Anel")

        expect(response.body.content.autor_id).toBe(1);
    })


    test("Deve retornar o livro pelo id do autor", async () => {
        const response = await request(app)
        .get('/livros/autor/1')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)

        expect(response.body.content[0].autor_id).toBe(1)

        expect(response.body.content).not.toBeNull()

    })


    test("Deve retornar um erro por id não existe no banco", async () => {
        const response = await request(app)
        .get('/livros/274947')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)


        expect(response.body).toBe("ID não existe no Banco!")

    })


    test("Deve retornar um erro por id do autor não existe no banco", async () => {
        const response = await request(app)
        .get('/livros/autor/274947')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body.message).toBe("Não existe esse autor!")

    })
})


describe("POST em '/livros' ", () => {
    test("Deve retornar um erro por falta de corpo", async () => {
        const response = await request(app)
        .post('/livros')
        .set('Accept', 'application/json')
        .send({})
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body).toBe("Corpo da requisicao vazio")
    })

    test("Deve retornar um erro por falta de corpo", async () => {
        const body = {
            titulo: "O Senhor dos Anéis: As duas torres",
            paginas: 576,
            sinopse : "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman",
            //"autor_id": 1
        }
        const response = await request(app)
        .post('/livros')
        .set('Accept', 'application/json')
        .send(body)
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body).toBe("ID do autor necessario")
    })


    test("Deve retornar um erro por falta de alguma inforamcao", async() => {
        const body = {
            titulo: "O Senhor dos Anéis: As duas torres",
            //paginas: 576,
            sinopse : "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman",
            "autor_id": 1
        }
        const response = await request(app)
        .post('/livros')
        .set('Accept', 'application/json')
        .send(body)
        .expect('content-type', /json/)
        .expect(500)

        console.log(response.body)

        expect(response.body).toBe("notNull Violation: Necessario numero de paginas para criaçao")
        
    })


    test("Deve criar um novo livro", async() => {
        const body = {
            titulo: "O Senhor dos Anéis: As duas torres",
            paginas: 576,
            sinopse : "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman",
            autor_id: 1
        }
        const response = await request(app)
        .post('/livros')
        .set('Accept', 'application/json')
        .send(body)
        .expect('content-type', /json/)
        .expect(201)


        expect(response.body.content).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...body,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            })
        )
        livro_id = response.body.content.id
    })
})


describe("PUT em '/livros' ", () => {
    test("Deve retornar o livro atualizado", async() => {
        const response = await request(app)
        .put(`/livros/${livro_id}`)
        .set('Accept', 'application/json')
        .send({titulo: "Hobbit"})
        .expect('content-type', /json/)
        .expect(201)


        expect(response.body.content.titulo).toBe("Hobbit")
    })

    test("Dever retonar um erro por falta de informacoes", async() => {
        const response = await request(app)
        .put('/livros/2')
        .set('Accept', 'application/json')
        .send()
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body.message).toBe('Corpo da requisicao vazio')
    
    })


    test("Deve retornar erro por id invalido", async() => { 
        const response = await request(app)
        .put('/livros/2405446')
        .set('Accept', 'application/json')
        .send({titulo: 'Teste'})
        .expect('content-type', /json/)
        .expect(500)



        expect(response.body.message).toBe("ID não existe no Banco!")

    })
})



describe("DELETE em '/livros' ", () => {
    test("Deve excluir um livro", async() => {
        const response = await request(app)
        .delete(`/livros/${livro_id}`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    })
})
