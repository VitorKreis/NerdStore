import { Router } from 'express';

import MangaController from '../controller/MangaController.js';

const router = Router();

router.get('/mangas', MangaController.pegarTodos);
router.get('/mangas/:id', MangaController.pegarPorID);

router.post('/mangas', MangaController.criarManga);
router.put('/mangas/:id', MangaController.atualizarManga);

router.delete('/mangas/:id', MangaController.deletarManga);

export default router;
