import bcryptjs from "bcryptjs"

export default function criarHashSenha(senha){
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(senha, salt)

    return hash
}
