import { createConnection } from "mysql";

process.env["DB_HOST"] = "database-wikionfire-1.ct2880iw3xvo.eu-central-1.rds.amazonaws.com"
process.env["DB_USER"] = "admin"
process.env["DB_PASS"] = "whoatemycookie"
process.env["DB_SCHEMA"] = "db";

const conn = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA
});

const insertArticle = async (article) => {

}

const insertTopViews = async (articleId, date, rank, views) => {

}

const processRecord = async (record) => {
  console.dir(record);
  const date = record.Keys.date.S;
  const rank = record.Keys.rank.N;
  const article = record.Keys.article.S;
  const views = record.Keys.article.N;

  const articleId = await insertArticle(article);
  await insertTopViews(articleId, date, rank, views);
};

const processRecords = async (records) => {
  records.foreach((record) => processRecord(record.dynamodb));
};

export const handler = async (event) => {
  console.dir(event);
  processRecords(event.Records);
  return JSON.stringify("Hello");
};
