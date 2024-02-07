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

    return resultado;
  }
}

export default MangaService;
