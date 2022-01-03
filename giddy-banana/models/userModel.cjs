"use strict";
<<<<<<< HEAD

const {
  Model
} = require("sequelize");
=======
const { Model } = require("sequelize");
>>>>>>> 6006dc7b5ce3e534b954b09a116c65a3dfc127e6
module.exports = (sequelize, DataTypes) => {
  /**
   * Represents a single user in the database.
   */
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     *
     * @param {Sequelize} models the database object from `Sequelize`
     */
    static associate(models) {
      models.User.belongsToMany(models.Article, { through: "Like_it" });
      models.User.belongsToMany(models.Article, { through: "Recommend" });
      models.User.belongsToMany(models.Article, { through: "Favourite" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^.+@.+$/,
            msg: "Invalid e-mail",
          },
        },
      },
      account_type: DataTypes.INTEGER,
      account_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
