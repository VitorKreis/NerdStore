import MangaService from '../service/MangaService.js';

const service = new MangaService();
class MangaController {
  static pegarTodos = async (req, res) => {
    try {
      const mangas = await service.pegarTodos();

      return res.status(200).json({ message: 'Todos os mangas do banco', content: mangas });
    } catch (error) {
      return res.status(500).json({ message: error.message, content: error });
    }
  };
}

export default MangaController;
