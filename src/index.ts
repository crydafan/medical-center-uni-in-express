import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (_, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
