'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("ArticleTopEditions", [
      {
        ArticleId: 1,
        date: new Date(),
        rank_position: 11,
        number_of_editions: 1120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ArticleId: 2,
        date: new Date(),
        rank_position: 13,
        number_of_editions: 1220,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('ArticleTopEditions', null, {});
  }
};
