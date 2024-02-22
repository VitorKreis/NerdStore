import { describe, expect, jest, test } from "@jest/globals"
import ArtistaService from "../../service/ArtistaService.js"

describe("Artista service", () => {
    const service = new ArtistaService()


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

        service.criarArtista = jest.fn().mockReturnValue({
            id: 10,
            nome: "Artista_test",
            nacionalidade: "test",
            idade: 1,
            created_at: '2022-10-01',
            updated_at: '2022-10-01',
        })

        const artista = await service.criarArtista(body);

        expect(artista).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...body,
                created_at: expect.any(String),
                updated_at: expect.any(String)
            })
        )

        service.criarArtista = new ArtistaService().criarArtista
    })


    test('Erro por falta de dado ou dados incorretos', async () =>{
        const body = {
        nome: 'Luiz Antonio',
        // nacionalidade: 'Brasileiro', 
        idade: 20 
        }
    
        expect(async (res) => {
            await service.criarArtista({
                nome: 'Luiz Antonio',
                // nacionalidade: 'Brasileiro', 
                idade: 20 
                });
        }).rejects.toThrowError('Necessario nacionalidade para criaçao!')


        expect(async (res) => {
            await service.criarArtista({
                // nome: 'Luiz Antonio',
                nacionalidade: 'Brasileiro', 
                idade: 20 
                });
        }).rejects.toThrowError('Necessario nome para criaçao!')
        
    })


    test('Deve retornar erro de id nao encontrado', () => {
        expect(async (res) => {
            await service.deletarArtista(210)
        }).rejects.toThrowError('Id não encontrado!')

    })


    
})

