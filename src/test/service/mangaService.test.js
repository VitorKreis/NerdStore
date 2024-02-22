import { describe, expect, jest, test } from "@jest/globals"
import MangaService from "../../service/MangaService"

describe("Manga Service", () => {
    const service = new MangaService();


    test('Busca dados pelo autor_id', async () => {
        const resultado = await service.buscarPorAutor_ID(7);
        

        expect(resultado).not.toBeNull();
        
    })


    test("Busca dados pelo artista_id", async () => {
        const resultado = await service.pegarPorArtista_ID(1);

        expect(resultado).not.toBeNull();    
    })

    test("Erro por falta de ID", () => {
        expect(async (res) => {
            await service.pegarPorID()
        }).rejects.toThrow("Necessario id para busca")
    })


    test("ID nao existe no banco", () =>{
        expect(async (res) => {
            await service.pegarPorID(455)
        }).rejects.toThrow("Manga não existe com esse ID")
    })

    test("Erro por falta de autor_id", () => {

        const body = {
            "titulo" : "Wotaku ni Koi ha Muzukashii",
            "sinopse" : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            "artista_id" : 6,
            //"autor_id": 7,
            "capitulo": 86
        }
        expect(async (res) => {
            await service.criarManga(body)
        }).rejects.toThrow("Autor_id necessario para criar manga!")
    })


    test("Erro por falta de autor_id", () => {

        const body = {
            "titulo" : "Wotaku ni Koi ha Muzukashii",
            "sinopse" : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            //"artista_id" : 6,
            "autor_id": 7,
            "capitulo": 86
        }
        expect(async (res) => {
            await service.criarManga(body)
        }).rejects.toThrow("Artista_id necessario para criar manga!")
    })


    test("Criar manga", async () => {
        
        const body = {
            titulo: "Wotaku ni Koi ha Muzukashii sjdksj",
            sinopse : "Apesar de Narumi Momose esconder seu gosto por histórias yaoi, seu namorado descobre tal hobby e termina o relacionamento. Para renovar sua vida, ela decide mudar de trabalho e lá acaba encontrando seu amigo de infância, Hirotaka Nifuji, um viciado em video games, que por pouco não revela o segredo de sua amiga",
            artista_id : 2,
            autor_id: 7,
            capitulo: 86
        }

        const resultado = await service.criarManga(body);

        expect(resultado).toEqual(
            expect.objectContaining(body)
        )


        await service.deletarManga(resultado.id)
    })
})
