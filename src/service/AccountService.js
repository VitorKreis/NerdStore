import Account from "../models/Account.js"



class AccountService{
    async pegarTodos(){
        const contas = await Account.findAll()

        return contas;
    }
}


export default AccountService
