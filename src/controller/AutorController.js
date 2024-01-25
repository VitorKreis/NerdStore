import AutorService from '../service/AutorService.js';

/* eslint-disable class-methods-use-this */
const service = new AutorService();

class AutorController {
  static pegarTodos = async (req, res) => {
    try {
      const autores = await service.pegarTodos();

      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static pegarPorID = async (req, res) => {
    const { id } = req.params;

    try {
      const autor = await service.pegarAutorPorID(id);

      return res.status(200).json(autor);
    } catch (error) {
      if (error.message === 'ID necessario para a busca!') {
        return res.status(400).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  };

  static criarAutor = async (req, res) => {
    const { body } = req;

    try {
      const autor = await service.criarAutor(body);

      return res.status(201).json(autor);
    } catch (error) {
      if (error.message === 'corpo da requisicao vazio') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  };

  static atualizarAutor = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
      const livroAutalizado = await service.autualizarAutor(id, body);

      return res.status(201).json(livroAutalizado);
    } catch (error) {
      if (error.message === 'corpo da requisicao vazio') {
        return res.status(400).json(error.message);
      } if (error.message === 'ID necessario para a busca!') {
        return res.status(400).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  };

  static excluirAutor = async (req, res) => {
    const { id } = req.params;

    try {
      const autor = await service.excluirAutor(id);

      return res.status(200).json(autor);
    } catch (error) {
      if (error.message === 'ID necessario para a busca!') {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  };
}

export default AutorController;