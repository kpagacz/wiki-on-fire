/**
 * This module seeds the `Articles` table.
 *
 * @module seeders/demoArticle
 */
"use strict";

module.exports = {
  /**
   * Seeds `Articles`.
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

    await queryInterface.bulkInsert("Articles", [
      {
        title: "First article",
        link_to_preview: "preview_link",
        link_to_contents: "content_link",
        number_of_authors: 1,
        date_added: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Aerobics",
        link_to_preview: "preview_link2",
        link_to_contents: "content_link2",
        number_of_authors: 100,
        date_added: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  /**
   * Undoes seeding `Articles`.
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
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
