import express from "express";
import router from "./routes/index.js";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log("WikiOnFire backend is listening on port:", port);
});
