'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      //await queryInterface.createTable('Like_it', { USER_id: Sequelize.INTEGER,ARTICLE_id: Sequelize.INTEGER });
      await queryInterface.createTable(
      'Like_it',
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
    //return queryInterface.dropTable('ProductTags');
      await queryInterface.dropTable('Like_it');

  }
};
