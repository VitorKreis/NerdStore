import { Router } from 'express';

import MangaController from '../controller/MangaController.js';

const router = Router();

router.get('/mangas', MangaController.pegarTodos);
router.get('/manga/:id', MangaController.pegarPorID);

export default router;
