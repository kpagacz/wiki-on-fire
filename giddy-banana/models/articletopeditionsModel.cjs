module.exports = (db) => {
  db.Article.belongsToMany(db.TopEditions, { through: "ArticleTopEditions" });
  db.TopEditions.belongsToMany(db.Article, { through: "ArticleTopEditions" });
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTopEditions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ArticleTopEditions.init({
    TopEditionsId: DataTypes.INTEGER,
    ArticleId: DataTypes.INTEGER,
    rank_position: DataTypes.INTEGER,
    number_of_editions: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticleTopEditions',
  });
  return ArticleTopEditions;
};
