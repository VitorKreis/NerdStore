/* eslint-disable class-methods-use-this */
const database = require('../models/index.js');

class LivroService {
  pegarLivros() {
    return database.Livro.findAll();
  }

  pegarLivroPorID(id) {
    if (!id) {
      throw new Error('ID do livro requerido!');
    }

    return database.Livro.findByPk(id);
  }

  criarLivro(body) {
    if (Object.keys(body).length === 0) {
      throw new Error('Corpo da requisiçao necessario!');
    }

    return database.Livro.create(body);
  }
}

module.exports = new LivroService();
