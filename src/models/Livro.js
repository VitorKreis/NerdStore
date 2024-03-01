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
      validate: {
        notNull : {msg: "Necessario titulo para criaçao"}
      }
    },
    paginas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull : {msg: "Necessario numero de paginas para criaçao"}
      }
    },
    sinopse: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg: "Necessario sinopse para criaçao"}
      }
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
