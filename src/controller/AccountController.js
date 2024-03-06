import AccountService from "../service/AccountService.js"

const service = new AccountService();

class AccountController{
    static pegarTodos = async (req,res) => {
        try {
            const contas = await service.pegarTodos();

            return res.status(200).json({message: "Segue todos as contas cadastradas", content: contas});    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }


    static pegarPorID = async (req, res) => {
        const {id} = req.params;
        try {
            const contas = await service.pegarPorID(id);

            return res.status(200).json({message: `Segue a conta com id ${id}`, content: contas});    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }


    static criarConta = async (req, res) => {
        const { body } = req;
        try {
            const conta = await service.criarConta(body)

            return res.status(200).json({message: "Conta criada com sucesso!", content: conta});    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }


    static atualizarConta = async (req, res) => {
        const { body } = req;
        const { id } = req.params;
        try {
            const conta = await service.atualizarConta(body, id);

            return res.status(200).json({message: "Conta atualizada com sucesso", content: conta});    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }


    static deletarConta = async (req, res) => {
        const {id} = req.params;
        try {
            await service.deletarConta(id)

            return res.status(200).json({message: "Conta excluida com sucesso!"});    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
    
}

export default AccountController
