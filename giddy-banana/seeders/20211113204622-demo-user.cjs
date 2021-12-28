'use strict';

const hashPassword = require("../src/hashing.js");

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

    return queryInterface.bulkInsert("Users", [
      {
        username: "test_username1",
        password: hashPassword("test_password"),
        email: "test_email@mail.com",
        account_type: 1,
        account_status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "test",
        password: "pass",
        email: "test_email@mail.com",
        account_type: 1,
        account_status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
