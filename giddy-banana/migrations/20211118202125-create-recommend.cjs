'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
    'Recommend',
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
    }
  );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Recommend');
  }
};
