'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        password: '123',
        role: 'user',
        email: 'pemuda@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sugiono',
        password: '123',
        role: 'user',
        email: 'sugiono@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
