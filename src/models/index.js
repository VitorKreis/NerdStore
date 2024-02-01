/* eslint-disable import/no-cycle */
import sequelize from '../config/DB/Config.js';
import Autor from './Autor.js';

import Livro from './Livro.js';

await sequelize.sync();

Livro.belongsTo(Autor, {
  foreignKey: 'autor_id',
  onDelete: 'NO ACTION',
});

Autor.hasMany(Livro, {
  foreignKey: 'autor_id',
  onDelete: 'NO ACTION',
});

export { Autor, Livro };
