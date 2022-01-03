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

    var arttopviews = [];
    var s2 = '.12.2021';

    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random()*(max + 1 - min))
    }


    for (let i = 0; i < 100; i++) {
      var num = generateRandomInteger(17,31);
      var s1 = num.toString();
      arttopviews.push({
                ArticleId: i + 1,
                date: s1.concat(s2),
                rank_position: 11,
                number_of_views: 1120,
                createdAt: new Date(),
                updatedAt: new Date()
          });
    }

    await queryInterface.bulkInsert("ArticleTopViews", arttopviews);
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
