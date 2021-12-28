module.exports = (db) => {
  db.Article.belongsToMany(db.TopViews, { through: "ArticleTopViews" });
  db.TopViews.belongsToMany(db.Article, { through: "ArticleTopViews" });
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTopViews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ArticleTopViews.init({
    TopViewsId: DataTypes.INTEGER,
    ArticleId: DataTypes.INTEGER,
    rank_position: DataTypes.INTEGER,
    number_of_views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticleTopViews',
  });
  return ArticleTopViews;
};
