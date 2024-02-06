import ArtistaService from '../service/ArtistaService.js';

const service = new ArtistaService();
class ArtistaController {
  static pegarTodos = async (req, res) => {
    try {
      const artistas = await service.pegarTodos();

      return res.status(200).json({ message: 'Todos os artista no banco', content: artistas });
    } catch (error) {
      return res.status(500).json({ message: error.message, content: error });
    }
  };
}

export default ArtistaController;
