const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.hasOne(models.Autor, {
        foreignKey: 'autor_id',
      });
    }
  }
  Livro.init({
    nome: DataTypes.STRING,
    paginas: DataTypes.INTEGER,
    autor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros',
  });
  return Livro;
};
