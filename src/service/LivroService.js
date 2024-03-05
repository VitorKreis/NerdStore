import { Livro, Autor } from '../models/index.js';

class LivroService {
  async pegarTodos() {
    const resultado = await Livro.findAll({
      include: [{
        model: Autor,
        required: true,
        attributes: ['id', 'nome'],
      }],
    });
    return resultado;
  }

  async pegarPorID(id) {
    if (!id) {
      throw new Error('ID necessario para a busca!');
    }

    const resultado = await Livro.findByPk(id);

    if (resultado == null) {
      throw new Error('ID não existe no Banco!');
    }

    return resultado;
  }

  async criarLivro(body) {

    if (!Object.keys(body).length) {
        throw new Error('Corpo da requisicao vazio');
    }
      

    if (!body.autor_id) {
      throw new Error('ID do autor necessario');
    }

    const autorID = await Autor.findByPk(body.autor_id);

    if (autorID == null) {
      throw new Error('ID do autor não existe no Banco!');
    }

    const resultado = await Livro.create(body);

    return resultado;
  }

  async atualizarLivro(id, body) {


    if (!Object.keys(body).length) {
      throw new Error('Corpo da requisicao vazio');
    }
    const resultado = await Livro.update(body, { where: { id } });


    if (resultado[0] === 0) {
        throw new Error('ID não existe no Banco!');
      }


      return resultado;

  }

  async excluirLivro(id) {
    if (!id) {
      throw new Error('ID necessario para a excluisão!');
    }

    const resultado = await Livro.destroy({ where: { id } });


    if (resultado === 0){
        throw new Error("Id não encontrado!")
    }

    return resultado;
  }

  async pegarLivroPorAutorID(id){
    if (!id) {
        throw new Error('ID do autor necessario');
      }

      const resultado = await Livro.findAll({where: {autor_id : id}})


      if(resultado.length === 0){
        throw new Error('Não existe esse autor!');
      }

      return resultado;

  }
}

export default LivroService;
