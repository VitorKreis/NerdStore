import {Router} from "express"
import AccountController from "../controller/AccountController.js"

const router = Router()


router.get('/account', AccountController.pegarTodos);
router.get('/account/:id', AccountController.pegarPorID);

router.post('/account', AccountController.criarConta);
router.put('/account/:id', AccountController.atualizarConta);


router.delete("/account/:id", AccountController.deletarConta);


export default router
