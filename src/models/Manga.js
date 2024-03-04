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
    validate: {
        notNull : {msg: "Necessario titulo para criaçao"}
      }

  },
  capitulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notNull : {msg: "Necessario capitulos para criaçao"}
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
    allowNull: false,
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
  modelName: 'Manga',
  tableName: 'mangas',
});

export default Manga;
