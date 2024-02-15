import serveStatic from 'serve-static';
import LivroService from '../service/LivroService.js';

const service = new LivroService();
class LivroController {
  static pegarTodos = async (req, res) => {
    try {
      const livros = await service.pegarTodos();

      return res.status(200).json({ message: 'Todos os autores no banco', content: livros });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static pegarPorID = async (req, res) => {
    const { id } = req.params;
    try {
      const livro = await service.pegarPorID(id);

      return res.status(200).json({ message: `Livro com o id ${id}`, content: livro });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static criarLivro = async (req, res) => {
    const { body } = req;
    try {
      const livro = await service.criarLivro(body);

      return res.status(201).json({ message: 'Livro criado com sucesso', content: livro });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static atualizarLivro = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
      const livroAtualizado = await service.atualizarLivro(id, body);

      return res.status(201).json(livroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static excluirLivro = async (req, res) => {
    const { id } = req.params;

    try {
      const livroExcluido = await service.excluirLivro(id);

      return res.status(200).json(livroExcluido);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };


  static pegarPorAutorID = async (req, res) => {
    const {id} = req.params;
    
    try {
        const livro = await service.pegarLivroPorAutorID(id);

        return res.status(200).json({ message: `Segue os livros com o autor_id ${id}`, content: livro });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default LivroController;
