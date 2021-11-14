'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

const Like_it = sequelize.define('Like_it', {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users, // 'Movies' would also work
      key: 'id'
    }
  },
  ArticleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Articles, // 'Actors' would also work
      key: 'id'
    }
  }
});
Users.belongsToMany(Articles, { through: Like_it });
Articles.belongsToMany(Users, { through: Like_it });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
