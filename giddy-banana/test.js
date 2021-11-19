import db from "./models/index.cjs";
console.dir(db.Article);
//db.User.belongsToMany(db.Article, { through: "Like_it" });
//db.Article.belongsToMany(db.User, { through: "Like_it" });

/*const result2 = await db.User.findOne({
	where: {id: 3},
});
const result3 = await db.Article.findOne({
	where: {id: 3},
});


result2.addArticle(result3);

console.log(result2);*/

const result = await db.User.findOne({
  where: { username: 'Liza' },
  include: db.Article
});
console.log(result);
console.log(result.Articles);

//console.log(result2);