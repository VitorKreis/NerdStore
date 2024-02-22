import { Artista, Autor, Manga } from '../models/index.js';

class MangaService {
  async pegarTodos() {
    const resultado = await Manga.findAll();

    return resultado;
  }

  async pegarPorID(id) {

    if(!id){
        throw new Error("Necessario id para busca")
    }

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


    if(!body.autor_id){
        throw new Error('Autor_id necessario para criar manga!');
    }

    if(!body.artista_id){
        throw new Error('Artista_id necessario para criar manga!');
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

  async pegarPorArtista_ID(id) {
    const resultado = await Manga.findAll({
      where: { artista_id: id },
      include: [{
        model: Artista,
        required: true,
        attributes: ['id', 'nome'],
      }],
    });

    console.log(resultado)

    if (resultado.length <= 0) {
      throw new Error('Artista id nao vinculado a um manga existente no banco!');
    }

    return resultado;
  }

  async buscarPorAutor_ID(id) {
    const resultado = await Manga.findAll({
      where: { autor_id: id },
      include: [{
        model: Autor,
        required: true,
        attributes: ['id', 'nome'],
      }],
    });

    if (resultado.length <= 0) {
      throw new Error('Artista id no vinculado a um manga existente no banco!');
    }

    return resultado;
  }
}

export default MangaService;
