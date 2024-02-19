import { DataTypes, Model } from 'sequelize';

import sequelize from '../config/DB/Config.js';

class Artista extends Model {}

Artista.init({
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
        notNull: { msg: 'Necessario nome para criaçao!' },
      },
  },
  nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Necessario nacionalidade para criaçao!' },
    },
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notNull: { msg: 'Necessario idade para criaçao!' },
        isInt: { msg: 'Necesario ser um numero para salvar' },
      },
  },
}, {
  sequelize,
  modelName: 'Artista',
  tableName: 'artistas',
});

export default Artista;
