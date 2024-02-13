import { Artista, Autor, Manga } from '../models/index.js';

class MangaService {
  async pegarTodos() {
    const resultado = await Manga.findAll();

    return resultado;
  }

  async pegarPorID(id) {
    const resultado = await Manga.findByPk(id, {
      include: [{
        model: Autor,
        required: true,
        attributes: ['id', 'nome'],
      },
      {
        model: Artista,
        required: true,
        attributes: ['id', 'nome'],
      },
      ],
    });

    if (resultado === null) {
      throw new Error('Manga não existe com esse ID');
    }

    return resultado;
  }

  async criarManga(body) {
    if (!Object.keys(body).length) {
      throw new Error('Necessario corpo da requisiçao!');
    }

    const resultado = await Manga.create(body);

    return resultado;
  }

  async atualizarManga(id, body) {
    if (!id) {
      throw new Error('ID necessario para atualização!');
    }

    if (!Object.keys(body).length) {
      throw new Error('Corpo da requisicao vazio');
    }

    const resultado = await Manga.update(body, { where: { id } });

    return resultado;
  }

  async deletarManga(id) {
    const resultado = await Manga.destroy({ where: { id } });

    return resultado;
  }
}

export default MangaService;
