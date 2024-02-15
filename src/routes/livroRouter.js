import { Router } from 'express';

import LivroController from '../controller/LivroController.js';

const router = Router();

router.get('/livros', LivroController.pegarTodos);
router.get('/livros/:id', LivroController.pegarPorID);
router.get('/livros/autor/:id', LivroController.pegarPorAutorID)

router.post('/livros', LivroController.criarLivro);
router.put('/livros/:id', LivroController.atualizarLivro);

router.delete('/livros/:id', LivroController.excluirLivro);

export default router;
