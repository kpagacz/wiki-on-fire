import { createConnection } from "mysql";

const insertArticle = (article, conn) => {
  const sql =
    "INSERT INTO Articles (title, link_to_contents, createdAt, updatedAt) VALUES ?";
  const values = [
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
  return new Promise(function (resolve, reject) {
    conn.query(sql, [values], function (err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const insertTopViews = (articleId, date, rank, views, conn) => {
  const sql =
    "INSERT INTO ArticleTopViews (ArticleId, date, rank_position, number_of_views, createdAt, updatedAt) VALUES ?";
  const values = [
    [
      articleId,
      date,
      rank,
      views,
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

  conn.query(sql, [values], function (err, result) {
    if (err) err;
  });
};

const processRecord = (record, conn) => {
  const date = record.NewImage.date.S;
  const rank = record.NewImage.rank.N;
  const article = record.NewImage.article.S;
  const views = record.NewImage.views.N;

  try {
    const result = insertArticle(article, conn);
    insertTopViews(result.insertId, date, rank, views, conn);
  } catch (err) {
    console.log(err);
  }
};

const processRecords = (records, conn) => {
  records.forEach((record) => {
    processRecord(record.dynamodb, conn);
  });
};

export const handler = (event) => {
  const conn = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });
  conn.connect((err) => {
    if (err) console.log("Error connecting to the database");
    console.log("Database connection established");
    processRecords(event.Records, conn);
    conn.end((err) => {
      if (err) console.log("Error ending the database connection");
      console.log("Database connection terminated")
    })
  })
  return JSON.stringify("Success");
};
