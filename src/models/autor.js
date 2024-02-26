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
    validate: {
        notNull: {msg : 'Necessario nome para criaçao!'}
    } 
  },
  nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notNull: {msg : 'Necessario nacionalidade para criaçao!'}
    } 
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notNull: {msg : 'Necessario idade para criaçao!'}
    } 
  },
}, {
  sequelize,
  modelName: 'Autor',
  tableName: 'autores',
});

export default Autor;
