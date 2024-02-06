import { Router } from 'express';
import ArtistaController from '../controller/ArtistaController.js';

const router = Router();

router.get('/artistas', ArtistaController.pegarTodos);

export default router;
