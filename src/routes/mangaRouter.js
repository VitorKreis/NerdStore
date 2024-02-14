import { Router } from 'express';

import MangaController from '../controller/MangaController.js';

const router = Router();

// Finders
router.get('/mangas', MangaController.pegarTodos);
router.get('/mangas/:id', MangaController.pegarPorID);
router.get('/mangas/artista/:id', MangaController.buscarPorArtista_ID);
router.get('/mangas/autor/:id', MangaController.buscarPorAutor_ID);

// Create and Update
router.post('/mangas', MangaController.criarManga);
router.put('/mangas/:id', MangaController.atualizarManga);

// Delete
router.delete('/mangas/:id', MangaController.deletarManga);

export default router;
