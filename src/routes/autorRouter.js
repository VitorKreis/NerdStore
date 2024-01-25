import { Router } from 'express';
import AutorController from '../controller/AutorController.js';

const router = Router();

router.get('/autores', AutorController.pegarTodos);
router.get('/autores/:id', AutorController.pegarPorID);

router.post('/autores', AutorController.criarAutor);
router.put('/autores/:id', AutorController.atualizarAutor);

router.delete('/autores/:id', AutorController.excluirAutor);

export default router;
