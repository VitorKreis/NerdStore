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
  modelName: 'Artista',
  tableName: 'artistas',
});

export default Artista;
