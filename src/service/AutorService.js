/* eslint-disable class-methods-use-this */
// import Autor from '../models/Autor.js';

import { Autor } from '../models/index.js';

class AutorService {
  async pegarTodos() {
    const resultado = await Autor.findAll();

    return resultado;
  }

  async pegarAutorPorID(id) {
    if (!id) {
      throw new Error('ID necessario para a busca!');
    }

    const resultado = await Autor.findByPk(id);

    if (resultado == null) {
      throw new Error("ID não existe no Banco!");
    }

    return resultado;
  }

  async criarAutor(body) {
    if (!Object.keys(body).length) {
      throw new Error('Necessario corpo da requisiçao!');
    }

    const resultado = await Autor.create(body);

    if(resultado.message){
        throw new Error(resultado.message);
    }

    return resultado;
  }

  async autualizarAutor(id, body) {
    if (!id) {
      throw new Error('ID necessario para a busca!');
    }

    if (!Object.keys(body).length) {
      throw new Error('Corpo da requisicao vazio');
    }
    try {
      const resultado = await Autor.update(body, { where: { id } });

      if (resultado) {
        const autor = await Autor.findByPk(id);
        return autor;
      }

      return resultado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async excluirAutor(id) {
    if (!id) {
      throw new Error('ID necessario para a busca!');
    }

    const resultado = await Autor.destroy({ where: { id } });

    return resultado;
  }
}

export default AutorService;
