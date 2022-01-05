import { createConnection } from "mysql";

process.env["DB_HOST"] =
  "database-wikionfire-1.ct2880iw3xvo.eu-central-1.rds.amazonaws.com";
process.env["DB_USER"] = "admin";
process.env["DB_PASS"] = "whoatemycookie";
process.env["DB_SCHEMA"] = "db";

const conn = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
});

const insertArticle = async (article) => {
  var sql =
    "INSERT INTO Articles (title, link_to_contents, createdAt, updatedAt) VALUES ?";
  var values = [
    [
      article,
      "https://en.wikipedia.org/wiki/" + article,
      new Date()
        .toISOString()
        .replace("-", "/")
        .split("T")[0]
        .replace("-", "/"),
      new Date()
        .toISOString()
        .replace("-", "/")
        .split("T")[0]
        .replace("-", "/"),
    ],
  ];

  return conn.query(sql, [values], function (err, result) {
    if (err) console.log(err);
    console.log(result);
    console.log(result.insertId);
    return result.insertId;
  });
};

const insertTopViews = async (articleId, date, rank, views) => {};

const processRecord = async (record) => {
  console.dir(record);
  const date = record.Keys.date.S;
  const rank = record.Keys.rank.N;
  const article = record.Keys.article.S;
  const views = record.Keys.article.N;

  const articleId = await insertArticle(article);
  // await insertTopViews(articleId, date, rank, views);
};

const processRecords = async (records) => {
  records.foreach((record) => processRecord(record.dynamodb));
};

export const handler = async (event) => {
  console.dir(event);
  processRecords(event.Records);
  return JSON.stringify("Hello");
};
