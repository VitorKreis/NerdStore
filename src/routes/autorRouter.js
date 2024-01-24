import { Router } from 'express';
import AutorController from '../controller/AutorController.js';

const router = Router();

router.get('/autores', AutorController.pegarTodos);

export default router;
