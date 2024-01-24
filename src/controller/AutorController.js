/* eslint-disable class-methods-use-this */
import Autor from '../models/autor.js';

class AutorController {
  static async pegarTodos(req, res) {
    try {
      const autores = await Autor.findAll();

      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default AutorController;
