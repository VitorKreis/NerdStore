/* eslint-disable class-methods-use-this */
const database = require('../models/index.js');

class LivroService {
  async pegarLivros() {
    const livros = await database.Livro.findAll();
    return livros;
  }

  async pegarLivroPorID(id) {
    if (!id) {
      throw new Error('ID do livro requerido!');
    }
    const livro = await database.Livro.findByPk(id);

    return livro;
  }

  async criarLivro(body) {
    if (Object.keys(body).length === 0) {
      throw new Error('Corpo da requisiçao necessario!');
    }

    const livro = await database.Livro.create(body);

    return livro;
  }

  async atualizarLivro(id, body) {
    const livro = await this.pegarLivroPorID(id);

    if (!livro) {
      throw new Error('Livo não existe no banco!');
    }

    if (Object.keys(body).length === 0) {
      throw new Error('Corpo da requisiçao necessario!');
    }

    const livroAtualizado = await livro.update(body);

    return livroAtualizado;
  }

  async deletarLivro(id) {
    const livro = await database.Livro.destroy({
      where: {
        id,
      },
    });
    return livro;
  }
}

module.exports = new LivroService();
