// Important considerations for this file and things I have learned
// when using MySQL library, node and asynchronous calls
// 1. Wrap calls to connection.query with a Promise and await for its resolution
// 2. forEach is inadequate to run async functions, use Promise.all(array.map(() => {})) instead
import { createConnection } from "mysql";

const insertArticle = async (article, conn) => {
  const find_query =
    "SELECT * FROM Articles WHERE title=" + conn.escape(article);
  const find_promise = new Promise((resolve, reject) => {
    conn.query(find_query, function (err, result, fields) {
      if (err) reject(err);
      else {
        resolve(result);
      }
    });
  });

  const select_result = await find_promise;
  if (select_result.length > 0) {
    return select_result[0].id;
  } else {
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
    const insert_promise = new Promise((resolve, reject) => {
      conn.query(sql, [values], function (err, result) {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const insert_res = await insert_promise;
    return insert_res.insertId;
  }
};

const insertTopViews = async (articleId, date, rank, views, conn) => {
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
    else {
      console.log(result);
    }
  });
};

const processRecord = async (record, conn) => {
  const date = record.NewImage.date.S;
  const rank = record.NewImage.rank.N;
  const article = record.NewImage.article.S;
  const views = record.NewImage.views.N;

  try {
    const id = await insertArticle(article, conn);
    await insertTopViews(id, date, rank, views, conn);
  } catch (err) {
    console.log(err);
  }
};

const processRecords = async (records, conn) => {
  await Promise.all(
    records.map(async (record) => {
      await processRecord(record.dynamodb, conn);
    })
  );
};

export const handler = async (event) => {
  const conn = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });
  conn.connect(async (err) => {
    if (err) console.log("Error connecting to the database");
    console.log("Database connection established");
    await processRecords(event.Records, conn);
    conn.end((err) => {
      if (err) console.log("Error ending the database connection");
      console.log("Database connection terminated");
    });
  });
  return JSON.stringify({ status: 200, msg: "Success" });
};
