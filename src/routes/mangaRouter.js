import { Router } from 'express';

import MangaController from '../controller/MangaController.js';

const router = Router();

router.get('/Mangas', MangaController.pegarTodos);

export default router;
