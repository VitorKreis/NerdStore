import MangaService from '../service/MangaService.js';

const service = new MangaService();
class MangaController {
  static pegarTodos = async (req, res) => {
    try {
      const mangas = await service.pegarTodos();

      return res.status(200).json({ message: 'Todos os mangas do banco', content: mangas });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static pegarPorID = async (req, res) => {
    const { id } = req.params;
    try {
      const manga = await service.pegarPorID(id);

      return res.status(200).json({ message: `Manga com id: ${id}`, content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static criarManga = async (req, res) => {
    const { body } = req;
    try {
      const manga = await service.criarManga(body);

      return res.status(201).json({ message: 'Manga criado com sucesso', content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static atualizarManga = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await service.atualizarManga(id, body);

      const manga = await service.pegarPorID(id);
      return res.status(201).json({ message: 'Manga atualizado com sucesso', content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static deletarManga = async (req, res) => {
    const { id } = req.params;
    try {
      await service.deletarManga(id);

      return res.status(202).json({ message: 'Manga removido' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static buscarPorArtista_ID = async (req, res) => {
    const { id } = req.params;

    try {
      const manga = await service.pegarPorArtista_ID(id);

      return res.status(200).json({ message: `Segue os mangas com o artista_id ${id}`, content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static buscarPorAutor_ID = async (req, res) => {
    const { id } = req.params;

    try {
      const manga = await service.buscarPorAutor_ID(id);

      return res.status(200).json({ message: `Segue os mangas com o autor_id ${id}`, content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MangaController;
