import { Manga } from '../models/index.js';

class MangaService {
  async pegarTodos() {
    const resultado = await Manga.findAll();

    return resultado;
  }
}

export default MangaService;
