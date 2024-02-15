import { describe, expect, jest, test } from "@jest/globals"
import ArtistaService from "../../service/ArtistaService.js"

describe("Artista service", () => {
    const service = new ArtistaService()

    service.criarArtista = jest.fn().mockReturnValue({
        id: 10,
        nome: "Artista_test",
        nacionalidade: "test",
        idade: 1,
        created_at: '2022-10-01',
        updated_at: '2022-10-01',
    })

    test('Deve retornar um erro', () => {
        expect(async () =>{
            const res = await service.pegarPorID(79)
            return res
        } ).rejects.toThrow('Id não encontrado!')
    })


    test('Retornar erro de sem id', () => {
        expect(async (res) => {
            await service.pegarPorID();
        }).rejects.toThrowError('Necessario id para busca!')
    })


    test('Deve retonar um artista', async() => {
        const body = {
            nome: "Artista_test",
            nacionalidade: "test",
            idade: 1
        }

        const artista = await service.criarArtista(body);

        expect(artista).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...body,
                created_at: expect.any(String),
                updated_at: expect.any(String)
            })
        )
    } )
})
