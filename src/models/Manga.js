import {
  Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/DB/Config.js';
import Autor from './Autor.js';
import Artista from './Artista.js';

class Manga extends Model {}

Manga.init({
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
  capitulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sinopse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor_id: {
    type: DataTypes.INTEGER,
    allowNull: null,
    references: {
      model: Autor,
      key: 'id',
    },
  },
  artista_id: {
    type: DataTypes.INTEGER,
    allowNull: null,
    references: {
      model: Artista,
      key: 'id',
    },
  },

}, {
  sequelize,
  modelName: 'Artistas',
  tableName: 'mangas',
});

export default Manga;
