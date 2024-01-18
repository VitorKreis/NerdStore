const LivroService = require('../service/livroService');

class LivrosController {
  static async pegarTodos(req, res) {
    try {
      const listaLivros = await LivroService.pegarLivros();

      return res.status(200).json(listaLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarPorId(req, res) {
    const { id } = req.params;

    try {
      const livro = await LivroService.pegarLivroPorID(id);

      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarLivro(req, res) {
    const { body } = req;
    try {
      const livro = await LivroService.criarLivro(body);

      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivrosController;
