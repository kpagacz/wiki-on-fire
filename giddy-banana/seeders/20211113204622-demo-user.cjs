/**
 * This module seeds the `Users` table of the database.
 *
 * @module seeders/demoUsers
 */
"use strict";

const { createHash } = require("crypto");

module.exports = {
  /**
   * Seeds `Users`.
   *
   * @param {Sequelize} queryInterface The Sequelize query interface
   * @param {Sequelize} Sequelize The Sequelize database model
   * @returns {void}
   */
  up: async (queryInterface, Sequelize) => {
    const hash = createHash("sha256");
    const hash2 = createHash("sha256");
    return queryInterface.bulkInsert("Users", [
      {
        username: "test_username1",
        password: hash.update("test_password").digest("hex"),
        email: "test_email@mail.com",
        account_type: 1,
        account_status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test",
        password: hash2.update("pass").digest("hex"),
        email: "test_email@mail.com",
        account_type: 1,
        account_status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  /**
   * Undoes seeding `Users`.
   *
   * @param {Sequelize} queryInterface The Sequelize query interface
   * @param {Sequelize} Sequelize The Sequelize database model
   * @returns {void}
   */
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
