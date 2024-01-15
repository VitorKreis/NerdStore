const { Router } = require('express');

const LivrosController = require('../controller/LivrosController');

const router = Router();

router.get('/livros', LivrosController.pegarTodos);

module.exports = router;
