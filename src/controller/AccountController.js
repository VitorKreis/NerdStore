import AccountService from "../service/AccountService.js"

const service = new AccountService();

class AccountController{
    static pegarTodos = async (req,res) => {
        const contas = await service.pegarTodos();

        res.json(contas);
    }
}

export default AccountController
