"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {Sequelize} models the database object from `Sequelize`
     */
    static associate(models) {}
  }
  Comment.init(
    {
      ArticleId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      contents: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
