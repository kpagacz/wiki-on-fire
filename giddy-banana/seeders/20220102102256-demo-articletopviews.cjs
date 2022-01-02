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

    await queryInterface.bulkInsert("ArticleTopViews", [
      {
        ArticleId: 1,
        date: new Date(),
        rank_position: 16,
        number_of_views: 1760,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ArticleId: 2,
        date: new Date(),
        rank_position: 19,
        number_of_views: 1960,
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
     return queryInterface.bulkDelete('ArticleTopViews', null, {});
  }
};
