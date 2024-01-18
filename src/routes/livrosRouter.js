const { Router } = require('express');

const LivrosController = require('../controller/LivrosController.js');

const router = Router();

router.get('/livros', LivrosController.pegarTodos);
router.get('/livros/:id', LivrosController.pegarPorId);
router.post('/livros', LivrosController.criarLivro);

module.exports = router;
