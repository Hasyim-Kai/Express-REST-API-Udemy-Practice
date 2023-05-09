'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'kenikmatan',
        content: 'ahhhahhhhahhhh',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: 'lendir',
        content: 'lengket',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
