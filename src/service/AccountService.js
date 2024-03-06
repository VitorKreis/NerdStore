import { where } from "sequelize";
import Account from "../models/Account.js"
import criarHashSenha from "./criarHashSenha.js";



class AccountService{
    async pegarTodos(){
        const contas = await Account.findAll()

        return contas;
    }

    async pegarPorID(id){
        if (!id) {
            throw new Error('ID necessario para a busca!');
          }

        const conta = await Account.findByPk(id)

        if(conta.message){
            throw new Error(resultado.message);
        }

        return conta;
    }

    async criarConta(body){
        if (!Object.keys(body).length) {
            throw new Error('Necessario corpo da requisiçao!');
          }

        const password = body.password;
        const password_hash = criarHashSenha(password);

        const conta = await Account.create({email: body.email, password : password_hash});
        
        if(conta.message){
            throw new Error(resultado.message);
        }

        return conta;
    }

    async atualizarConta(body, id){
        if (!id) {
            throw new Error('ID necessario para a busca!');
        }

        if (!Object.keys(body).length) {
            throw new Error('Necessario corpo da requisiçao!');
        }

        if(body.password){
            const hash_password = criarHashSenha(body.password)
            await Account.update( hash_password, { where: { id } })
            
        }else{
           await Account.update(body, { where: { id } })   
        }

        const conta = await this.pegarPorID(id)

        return conta;   
    }


    async deletarConta(id){
        if (!id) {
            throw new Error('ID necessario para a busca!');
        }

        const conta = await Account.destroy({where: {id}})

        return conta;
    }
}


export default AccountService
