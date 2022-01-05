/**
 * This module seeds the `ArticleTopEditions` table.
 *
 * @module seeders/demoArticleTopEditions
 */
"use strict";

module.exports = {
  /**
   * Seeds `ArticleTopEditions`.
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

    await queryInterface.bulkInsert("ArticleTopEditions", [
      {
        ArticleId: 1,
        date: new Date(),
        rank_position: 11,
        number_of_editions: 1120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  /**
   * Undoes seeding `ArticleTopEditions`.
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
    return queryInterface.bulkDelete("ArticleTopEditions", null, {});
  },
};
