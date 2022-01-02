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
    //var days = ['17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random()*(max + 1 - min))
    }



    for (let i = 0; i < 100; i++) {
      var num = generateRandomInteger(17,31);
      var s1 = num.toString();
      arttopviews.push({
                ArticleId: i + 1,
                //date: days[Math.round(Math.random())].concat(s2),
                date: s1.concat(s2),
                rank_position: 11,
                number_of_views: 1120,
                createdAt: new Date(),
                updatedAt: new Date()
          });
    }

    await queryInterface.bulkInsert("ArticleTopViews", arttopviews);






//    await queryInterface.bulkInsert("ArticleTopViews", [
//      {
//        ArticleId: 1,
//        date: new Date(),
//        rank_position: 16,
//        number_of_views: 1760,
//        createdAt: new Date(),
//        updatedAt: new Date()
//      }
//    ])
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
