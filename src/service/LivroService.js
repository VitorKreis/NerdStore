/* eslint-disable class-methods-use-this */
import { Livro, Autor } from '../models/index.js';

class LivroService {
  pegarTodos() {
    return Livro.findAll({
      include: [{
        model: Autor,
        required: true,
        attributes: ['nome'],
      }],
    });
  }

  pegarPorID(id) {
    return Livro.findByPk(id);
  }

  criarLivro(body) {
    return Livro.create(body);
  }

  atualizarLivro(id, body) {
    return Livro.update(body, { where: { id } });
  }

  excluirLivro(id) {
    return Livro.destroy({ where: { id } });
  }
}

export default LivroService;
