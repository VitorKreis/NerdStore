import { Router } from 'express';
import ArtistaController from '../controller/ArtistaController.js';

const router = Router();

// finders
router.get('/artistas', ArtistaController.pegarTodos);
router.get('/artista/:id', ArtistaController.pegarArtistaPorID);

// create and update
router.post('/artistas', ArtistaController.criarArtista);
router.put('/artistas/:id', ArtistaController.atualizarArtista);

// Delete
router.delete('/artista/:id', ArtistaController.removerArtista);

export default router;
