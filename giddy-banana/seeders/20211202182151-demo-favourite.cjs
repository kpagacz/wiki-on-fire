/**
 * This module seeds the `Favourite` table.
 *
 * @module seeders/demoFavourite
 */
"use strict";

module.exports = {
  /**
   * Seeds `Favourite`.
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
    return queryInterface.bulkInsert("Favourite", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ArticleId: 1,
        UserId: 1,
        playlist_title: "my test playlist",
      },
    ]);
  },
  /**
   * Undoes seeding `Favourite`
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
    return queryInterface.bulkDelete("Favourite", null, {});
  },
};
