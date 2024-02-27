import { Router } from 'express';
import ArtistaController from '../controller/ArtistaController.js';

const router = Router();

// finders
router.get('/artistas', ArtistaController.pegarTodos);
router.get('/artistas/:id', ArtistaController.pegarArtistaPorID);

// create and update
router.post('/artistas', ArtistaController.criarArtista);
router.put('/artistas/:id', ArtistaController.atualizarArtista);

// Delete
router.delete('/artistas/:id', ArtistaController.removerArtista);

export default router;
