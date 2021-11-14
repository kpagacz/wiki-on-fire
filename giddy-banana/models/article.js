'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    title: DataTypes.STRING,
    link_to_preview: DataTypes.STRING,
    link_to_contents: DataTypes.STRING,
    number_of_authors: DataTypes.INTEGER,
    date_added: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};