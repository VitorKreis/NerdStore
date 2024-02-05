import { expect, describe, test } from '@jest/globals';
import LivroService from '../../service/LivroService';

describe('Livro service', () => {
  const service = new LivroService();

  const livro = {
    titulo: 'Senhor dos aneis: O retorno do rei',
    paginas: 528,
  };

  test('Deve retonar um error de falta de autor', async () => {
    expect(async () => {
      await service.criarLivro(livro);
    }).rejects.toThrow('ID do autor necessario');
  });

  test('Deve atualizar o livro', async () => {
    await service.atualizarLivro(1, livro);

    const resultado = await service.pegarPorID(1);
    expect(resultado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        autor_id: expect.any(Number),
        titulo: expect.any(String),
        paginas: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
  });

  test('Deve retornar um erro', () => {
    const body = {
      titulo: 'Hobbit',
      paginas: 576,
      autor_id: 5,
    };

    expect(async () => {
      await service.criarLivro(body);
    }).rejects.toThrow('ID do autor não existe no Banco!');
  });
});
