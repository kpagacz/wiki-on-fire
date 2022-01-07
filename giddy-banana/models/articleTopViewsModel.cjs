/**
 * This module exports the `ArticleTopViewsModel`.
 *
 * @module models/articleTopViewsModel
 */
"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleTopViews extends Model {
    /**
     * Helper method for defining associations. This method is not a part of
     * Sequelize lifecycle. The `models/index` file will call this method automatically.
     *
     * @param {Sequelize} models The database object from `Sequelize`
     */
    static associate(models) {
      models.Article.hasMany(models.ArticleTopViews);
      models.ArticleTopViews.belongsTo(models.Article);
    }
  }
  ArticleTopViews.init(
    {
      ArticleId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      rank_position: DataTypes.INTEGER,
      number_of_views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ArticleTopViews",
    }
  );
  return ArticleTopViews;
};
