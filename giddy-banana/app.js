import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world! This is WikiOnFire!");
});

app.listen(port, () => {
  console.log("The hello world is listening on port: ${port}");
});
