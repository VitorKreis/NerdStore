/* eslint-disable no-undef */
import { expect, describe } from '@jest/globals';
import AutorService from '../../service/AutorService';

describe('Autor service', () => {
  const service = new AutorService();

  const Autor = {
    nome: 'Pete Goodliffe',
    nacionalidade: 'Americano',
    idade: 40,
  };

  test('Retornar todos os autores no banco', async () => {
    const resultado = await service.pegarTodos();

    expect(resultado).not.toBeNull();
  });

  test('Retornar um erro sem id', async () => {
    expect(async () => {
      const resultado = await service.pegarAutorPorID();
      return resultado;
    }).rejects.toThrow('ID necessario para a busca!');
  });

  test('Retornar id não existe', async () => {
    expect(async () => {
      const resultado = await service.pegarAutorPorID(10);
      return resultado;
    }).rejects.toThrow('ID não existe no Banco!');
  });

  let autorID;
  test('Retornar um novo autor', async () => {
    const resultado = await service.criarAutor(Autor);
    autorID = resultado.id;
    expect(resultado).toEqual(
      expect.objectContaining(Autor),
    );
  });

  test('Excluir uma autor', async () => {
    const resultado = await service.excluirAutor(autorID);

    expect(resultado).toBe(1);
  });
});
