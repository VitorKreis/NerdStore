/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      {
        nome: 'Hobbit',
        paginas: 245,
        autor: 'J.R.R Tolkien',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Eragon',
        paginas: 466,
        autor: 'Christopher Paolini',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Breves Respostas para Grandes Perguntas',
        paginas: 254,
        autor: 'Stephen Hawking',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Alquimista',
        paginas: 206,
        autor: 'Paulo Coelho',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  },
};
