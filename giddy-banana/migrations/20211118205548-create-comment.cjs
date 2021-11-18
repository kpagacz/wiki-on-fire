'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
    'Comment',
    {
      id: {
        allowNull: false,
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
        //primaryKey: true,
      },
      UserId: {
        type: Sequelize.INTEGER,
        //primaryKey: true,
      },
      contents: {
        type: Sequelize.STRING,
      },
      date_added: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.INTEGER,
      },
    }
  );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Comment');
  }
};
