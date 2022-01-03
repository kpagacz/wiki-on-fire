/**
 * This module seeds the `Like_it` table.
 *
 * @module seeders/demoLikeIt
 */
"use strict";

module.exports = {
  /**
   * Seeds `Like_it`.
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
    return queryInterface.bulkInsert("Like_it", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ArticleId: 1,
        UserId: 1,
      },
    ]);
  },

  /**
   * Undoes seeding `Like_it`.
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
    return queryInterface.bulkDelete("Like_it", null, {});
  },
};
