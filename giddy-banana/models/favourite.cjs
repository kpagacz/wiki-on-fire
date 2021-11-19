module.exports = (db) => {
  db.Article.belongsToMany(db.User, { through: "Favourite" });
  db.User.belongsToMany(db.Article, { through: "Favourite" });
};
