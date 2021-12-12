'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
    'Favourite',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ArticleId: {
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      playlist_title: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
      },
    }
  );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Favourite');
  }
};
