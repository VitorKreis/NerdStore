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

      return res.status(200).json({ message: 'Todos os mangas do banco', content: manga });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MangaController;
