/* eslint-disable class-methods-use-this */
import { Livro, Autor } from '../models/index.js';

class LivroService {
  async pegarTodos() {
    const resultado = await Livro.findAll({
      include: [{
        model: Autor,
        required: true,
        attributes: ['nome'],
      }],
    });
    return resultado;
  }

  async pegarPorID(id) {
    if (!id) {
      throw new Error('ID necessario para a busca!');
    }

    const resultado = await Livro.findByPk(id);

    return resultado;
  }

  async criarLivro(body) {
    if (!body.autor_id) {
      throw new Error('Necessario id de um autor');
    }
    const resultado = await Livro.create(body);

    return resultado;
  }

  atualizarLivro(id, body) {
    return Livro.update(body, { where: { id } });
  }

  excluirLivro(id) {
    return Livro.destroy({ where: { id } });
  }
}

export default LivroService;
