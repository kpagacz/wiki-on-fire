/**
 * Seeds the DynamoDB table with the first 100 of the most viewed articles from each of the past 100 days.
 * Uses AWS_ACCESS_KEY and AWS_SECRET_KEY environmental variables to authenticate to AWS.
 */

import { getMostViewedArticles } from "./requests.js";
import AWS from "aws-sdk";

const DAYS_LIMIT = 100;
const ARTICLES_LIMIT = 100;

const config = {
  region: "eu-central-1",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
};
const dynamo = new AWS.DynamoDB(config);
dynamo.listTables({}, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else if (!data.TableNames.includes("MostViewedArticles"))
    throw new Error("MostViewedArticles table not available");
});

const now = new Date().getTime();
for (let i = 0; i < DAYS_LIMIT; i++) {
  const date = new Date(now - i * 24 * 60 * 60 * 1000);
  getMostViewedArticles(date.getFullYear(), date.getMonth() + 1, date.getDate())
    .then((data) => {
      data.slice(0, ARTICLES_LIMIT).forEach((article) => {
        const params = {
          Item: {
            date: {
              S: date.toISOString().slice(0, 10),
            },
            rank: {
              N: article.rank.toString(),
            },
            article: {
              S: article.article,
            },
            views: {
              N: article.views.toString(),
            },
          },
          ReturnConsumedCapacity: "TOTAL",
          TableName: "MostViewedArticles",
        };
        dynamo.putItem(params, function (err, data) {
          if (err) console.error("Putting item unsuccessful. " + err.message);
        });
      });
      {
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
