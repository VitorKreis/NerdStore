import { Autor, Livro } from '../models/index.js';

class LivroController {
  static pegarTodos = async (req, res) => {
    try {
      const livros = await Livro.findAll({
        include: [{
          model: Autor,
          required: true,
          attributes: ['nome'],
        }],
      });

      return res.status(200).json(livros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

export default LivroController;
