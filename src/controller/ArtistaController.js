import ArtistaService from '../service/ArtistaService.js';

const service = new ArtistaService();
class ArtistaController {
  static pegarTodos = async (req, res) => {
    try {
      const artistas = await service.pegarTodos();

      return res.status(200).json({ message: 'Todos os artista no banco', content: artistas });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static pegarArtistaPorID = async (req, res) => {
    const { id } = req.params;
    try {
      const artista = await service.pegarPorID(id);

      return res.status(200).json({ message: `Artista com id: ${id}`, content: artista });
    } catch (error) {
        if(error.message === 'Id não encontrado!'){
            return res.status(400).json({ message: error.message });
        }
      return res.status(500).json({ message: error.message });
    }
  };

  static criarArtista = async (req, res) => {
    const { body } = req;
    try {
      const artista = await service.criarArtista(body);

      return res.status(201).json({ message: 'Artista criado', content: artista });
    } catch (error) {
        if(error.message === 'Necessario corpo da requisiçao!'){
            return res.status(400).json({ message: error.message });
        }
      return res.status(500).json({ message: error.message });
    }
  };

  static atualizarArtista = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
      await service.atualizarArtista(id, body);

      const artista = await service.pegarPorID(id);

      return res.status(202).json({ message: 'Artista atualizado', content: artista });
    } catch (error) {
        if(error.message === 'Necessario corpo da requisiçao!'){
            return res.status(400).json({ message: error.message });
        }
      return res.status(500).json({ message: error.message });
    }
  };

  static removerArtista = async (req, res) => {
    const { id } = req.params;

    try {
      await service.deletarArtista(id);

      return res.status(202).json({ message: 'Artista removido' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ArtistaController;
