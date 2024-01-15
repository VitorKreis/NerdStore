const database = require('../models');

class LivrosController {
  static async pegarTodos(req, res) {
    try {
      const listaLivros = await database.Livro.findAll();

      return res.status(200).json(listaLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivrosController;
