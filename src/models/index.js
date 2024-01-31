/* eslint-disable import/no-cycle */
import sequelize from '../config/DB/Config.js';
import Autor from './Autor.js';

import Livro from './Livro.js';

sequelize.sync();

Livro.belongsTo(Autor, {
  foreignKey: 'autor_id',
});

Autor.hasMany(Livro, {
  foreignKey: 'autor_id',
});

export { Autor, Livro };
