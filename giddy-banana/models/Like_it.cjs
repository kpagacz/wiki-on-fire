module.exports = (db) => {
  db.Article.belongsToMany(db.User, { through: "Like_it" });
  db.User.belongsToMany(db.Article, { through: "Like_it" });
};
