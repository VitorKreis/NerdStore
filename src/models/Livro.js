import {
  Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/DB/Config.js';
import Autor from './Autor.js';

class Livro extends Model {}

Livro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paginas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: null,
      references: {
        model: Autor,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros',
  },
);

export default Livro;
