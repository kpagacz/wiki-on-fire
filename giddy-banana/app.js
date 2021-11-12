import express from "express";
import router from "./routes/index.js";
const app = express();
const port = 3001;

app.use("/", router);

app.listen(port, () => {
  console.log("The hello world is listening on port: ${port}");
});
