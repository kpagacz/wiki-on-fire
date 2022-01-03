"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleTopEditions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {Sequelize} models the database object from `Sequelize`
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
