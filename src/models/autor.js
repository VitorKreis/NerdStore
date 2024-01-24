/* eslint-disable class-methods-use-this */
import {
  Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/DB/Config.js';

class Autor extends Model {}

Autor.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Autor',
  tableName: 'autores',
});

export default Autor;
