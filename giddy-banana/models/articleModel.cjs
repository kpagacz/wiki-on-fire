/**
 * This module exports the `Article` model.
 *
 * @module models/articleModel
 */
"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations. This method is not a part of
     * Sequelize lifecycle. The `models/index` file will call this method automatically.
     *
     * @param {Sequelize} models The database object from `Sequelize`
     */
    static associate(models) {
      models.Article.belongsToMany(models.User, { through: "Like_it" });
      models.Article.belongsToMany(models.User, { through: "Recommend" });
      models.Article.belongsToMany(models.User, { through: "Favourite" });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      link_to_preview: DataTypes.STRING,
      link_to_contents: DataTypes.STRING,
      number_of_authors: DataTypes.INTEGER,
      date_added: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
