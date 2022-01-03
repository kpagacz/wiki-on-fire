/**
 * This the main entry point of the backend application.
 *
 * @module app
 */
import express from "express";
import router from "./routes/index.js";
import middleware from "./middleware/index.js";
const app = express();
const port = 3001;

middleware(app);
app.use("/", router);

app.listen(port, () => {
  console.log("WikiOnFire backend is listening on port:", port);
});
