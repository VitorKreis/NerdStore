import { Artista } from '../models/index.js';

class ArtistaService {
  async pegarTodos() {
    const resultado = await Artista.findAll();

    return resultado;
  }

  async pegarPorID(id) {
    const resultado = await Artista.findByPk(id);

    if (resultado == null) {
      throw new Error('Id não encontrado!');
    }

    return resultado;
  }

  async criarArtsta(body) {
    if (!Object.keys(body).length) {
      throw new Error('Necessario corpo da requisiçao!');
    }

    const resultado = await Artista.create(body);

    return resultado;
  }

  async atualizarArtista(id, body) {
    const resultado = await Artista.update(body, { where: { id } });

    return resultado;
  }

  async deletarArtista(id) {
    const resultado = await Artista.destroy({ where: { id } });

    return resultado;
  }
}

export default ArtistaService;
