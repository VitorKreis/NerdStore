import { Router } from 'express';

import LivroController from '../controller/LivroController.js';

const router = Router();

router.get('/livros', LivroController.pegarTodos);

export default router;
