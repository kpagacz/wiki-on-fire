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

export async function handler(event) {
  console.dir(event);
  console.log(JSON.stringify(event, null, 2));
  return JSON.stringify("Hello");
};
