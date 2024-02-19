import { Artista } from '../models/index.js';

class ArtistaService {
  async pegarTodos() {
    const resultado = await Artista.findAll();

    return resultado;
  }

  async pegarPorID(id) {

    if(!id){
        throw new Error('Necessario id para busca!');
    }
    const resultado = await Artista.findByPk(id);

    if (resultado == null) {
      throw new Error('Id não encontrado!');
    }

    return resultado;
  }

  async criarArtista(body) {
    if (!Object.keys(body).length) {
      throw new Error('Necessario corpo da requisiçao!');
    }

    const resultado = await Artista.create(body);

    if(resultado.message){
        throw new Error(resultado.message);
    }

    return resultado;
  }

  async atualizarArtista(id, body) {

    if (!Object.keys(body).length) {
        throw new Error('Necessario corpo da requisiçao!');
      }
    const resultado = await Artista.update(body, { where: { id } });

    return resultado;
  }

  async deletarArtista(id) {
    const resultado = await Artista.destroy({ where: { id } });

    if(resultado === 0){
        throw new Error('Id não encontrado!');
    }

    console.log(resultado)

    return resultado;
  }
}

export default ArtistaService;
