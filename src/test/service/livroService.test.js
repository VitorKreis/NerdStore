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
      const error = await service.criarLivro(livro);
      return error;
    }).rejects.toThrow('Necessario id de um autor');
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
});
