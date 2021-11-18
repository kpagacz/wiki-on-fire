module.exports = (db) => {
  db.Article.belongsToMany(db.User, { through: "Comment" });
  db.User.belongsToMany(db.Article, { through: "Comment" });
};
