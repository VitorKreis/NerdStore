import {Router} from "express"
import AccountController from "../controller/AccountController.js"

const router = Router()


router.get('/account', AccountController.pegarTodos)


export default router
