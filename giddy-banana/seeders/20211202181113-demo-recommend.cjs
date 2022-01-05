/**
 * This module seeds the `Recommend` table.
 *
 * @module seeders/demoRecommend
 */
"use strict";

module.exports = {
  /**
   * Seeds `Recommend`.
   *
   * @param {Sequelize} queryInterface The Sequelize query interface
   * @param {Sequelize} Sequelize The Sequelize database model
   * @returns {void}
   */
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example: await queryInterface.bulkInsert('People', [{ name: 'John Doe',
     * isBetaMember: false }], {});
     */
    return queryInterface.bulkInsert("Recommend", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ArticleId: 1,
        UserId: 1,
      },
    ]);
  },

  /**
   * Undoes seeding `Recommend`.
   *
   * @param {Sequelize} queryInterface The Sequelize query interface
   * @param {Sequelize} Sequelize The Sequelize database model
   * @returns {void}
   */
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example: await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Recommend", null, {});
  },
};
