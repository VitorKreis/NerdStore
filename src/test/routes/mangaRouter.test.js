import request from 'supertest'
import { afterEach, beforeEach, describe, expect } from '@jest/globals'
import app from "../../app"

let server;
beforeEach(()=> { //Inicia uma routa para os testes
    const port = 3030
    server = app.listen(port)
})


afterEach(() =>{ //Fecha essa rota quando terminar
    server.close()
})


let mangaID;


describe("GET em '/mangas' ", () => {
    test('Deve retornar os mangas', async() => {
        const response = await request(app)
        .get('/mangas')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)


        expect(response.body.message).toBe('Todos os mangas do banco')
    })

    test("Deve retornar um manga por id", async ()=> {
        const response = await request(app)
        .get('/mangas/2')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)


        expect(response.body.content.titulo).toBe("One Piece")


        expect(response.body.content.Artistum.nome).toBe('Eiichiro Oda');
    })

    test("Deve retornar o manga pelo id do artista", async () => {
        const response = await request(app)
        .get('/mangas/artista/1')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)


        expect(response.body.content[0].titulo).toBe('Black Clover')

        expect(response.body.content[0].Artistum.nome).toBe("Yuki Tabata")

    })


    test("Deve retornar o manga pelo id do autor", async () => {
        const response = await request(app)
        .get('/mangas/autor/5')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)

        expect(response.body.content[0].titulo).toBe('One Piece')

        expect(response.body.content[0].Autor.nome).toBe("Eiichiro Oda")

    })

    test('Deve retornar um erro de id inexistente', async() => {
        const reponse = await request(app)
        .get("/mangas/349373")
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)

        expect(reponse.body.message).toBe('Manga não existe com esse ID')
    })


    test('Deve retornar um erro de id do artista inexistente', async() => {
        const reponse = await request(app)
        .get("/mangas/artista/349373")
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)

        expect(reponse.body.message).toBe('Artista id nao vinculado a um manga existente no banco!')
    })

    test('Deve retornar um erro de id do autor inexistente', async() => {
        const reponse = await request(app)
        .get("/mangas/autor/349373")
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)

        expect(reponse.body.message).toBe('Autor id nao vinculado a um manga existente no banco!')
    })

})


describe("POST em '/mangas' ", () => {

    test('Deve criar um manga', async()=> {
        const body = {
            titulo : "Wotaku ni Koi ha Muzukashii",
            sinopse : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            artista_id : 1,
            autor_id: 7,
            capitulo: 86
        }
        const response = await request(app)
        .post('/mangas')
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
        mangaID = response.body.content.id
        
    })


    test('Deve retornar um erro por falta do corpo da requisicao', async () => {
        const response = await request(app)
        .post('/mangas')
        .set('Accept', 'application/json')
        .send({})
        .expect('content-type', /json/)
        .expect(500)

        expect(response.body.message).toBe("Necessario corpo da requisiçao!")
    })


    test('Deve retornar um erro por falta do id do autor', async () => {
        const response = await request(app)
        .post('/mangas')
        .set('Accept', 'application/json')
        .send({
            titulo : "Wotaku ni Koi ha Muzukashii",
            sinopse : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            artista_id : 1,
            //autor_id: 7,
            capitulo: 86
        })
        .expect('content-type', /json/)
        .expect(500)


        expect(response.body.message).toBe("Autor_id necessario para criar manga!")
    })

    test('Deve retornar um erro por falta do id do artista', async () => {
        const response = await request(app)
        .post('/mangas')
        .set('Accept', 'application/json')
        .send({
            titulo : "Wotaku ni Koi ha Muzukashii",
            sinopse : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            //artista_id : 1,
            autor_id: 7,
            capitulo: 86
        })
        .expect('content-type', /json/)
        .expect(500)


        expect(response.body.message).toBe("Artista_id necessario para criar manga!")
    })


    test('Deve retornar um erro por falta de alguma informacao', async () => {
        const response = await request(app)
        .post('/mangas')
        .set('Accept', 'application/json')
        .send({
            titulo : "Wotaku ni Koi ha Muzukashii",
            //sinopse : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            artista_id : 1,
            autor_id: 7,
            capitulo: 86
        })
        .expect('content-type', /json/)
        .expect(500)

        console.log(response.body.message)



        expect(response.body.message).toBe("notNull Violation: Necessario sinopse para criaçao")
    })
})




describe("DELETE em '/mangas' ", () => {
    test("Deve excluir um manga", async() => {
        const response = await request(app)
        .delete(`/mangas/${mangaID}`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(202)


        expect(response.body.message).toBe("Manga removido")
    })


    test("Deve retornar um erro por id invalido", async() =>{
        const response = await request(app)
        .delete(`/mangas/58947`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(500)


        expect(response.body.message).toBe("Id não encontrado!")
    }) 

    
})

