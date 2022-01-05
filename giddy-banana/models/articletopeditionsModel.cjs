/**
 * This module exports the `ArticleTopEditions` model.
 *
 * @module models/articletopeditionsModel
 */
"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleTopEditions extends Model {
    /**
     * Helper method for defining associations. This method is not a part of
     * Sequelize lifecycle. The `models/index` file will call this method automatically.
     *
     * @param {Sequelize} models The database object from `Sequelize`
     */
    static associate(models) {
      models.Article.hasMany(models.ArticleTopEditions);
      models.ArticleTopEditions.belongsTo(models.Article);
    }
  }
  ArticleTopEditions.init(
    {
      ArticleId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      rank_position: DataTypes.INTEGER,
      number_of_editions: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ArticleTopEditions",
    }
  );
  return ArticleTopEditions;
};
