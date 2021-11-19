module.exports = (db) => {
  db.Article.belongsToMany(db.User, { through: "Recommend" });
  db.User.belongsToMany(db.Article, { through: "Recommend" });
};
