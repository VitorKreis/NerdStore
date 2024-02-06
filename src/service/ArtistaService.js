/* eslint-disable class-methods-use-this */
import { Artista } from '../models/index.js';

class ArtistaService {
  async pegarTodos() {
    const resultado = await Artista.findAll();

    return resultado;
  }
}

export default ArtistaService;
