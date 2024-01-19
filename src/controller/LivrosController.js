const livroService = require('../service/livroService');
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

  static async atualizarLivro(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      const livroAtualizado = await livroService.atualizarLivro(id, body);

      return res.status(201).json(livroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirLivro(req, res) {
    const { id } = req.params;

    try {
      const livroDestruido = await LivroService.deletarLivro(id);

      return res.status(200).json({ message: 'Livro deletado com Sucesso!', livroDestruido });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivrosController;
