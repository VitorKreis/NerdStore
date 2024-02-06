/* eslint-disable import/no-cycle */
import sequelize from '../config/DB/Config.js';
import Artista from './Artista.js';
import Autor from './Autor.js';

import Livro from './Livro.js';
import Manga from './Manga.js';

await sequelize.sync();

Livro.belongsTo(Autor, {
  foreignKey: 'autor_id',
  onDelete: 'NO ACTION',
});

Manga.belongsTo(Artista, {
  foreignKey: 'artista_id',
  onDelete: 'NO ACTION',
});

Manga.belongsTo(Autor, {
  foreignKey: 'autor_id',
  onDelete: 'NO ACTION',
});

Autor.hasMany(Livro, {
  foreignKey: 'autor_id',
  onDelete: 'NO ACTION',
});

Artista.hasMany(Manga, {
  foreignKey: 'artista_id',
  onDelete: 'NO ACTION',
});

export {
  Autor, Livro, Manga, Artista,
};
