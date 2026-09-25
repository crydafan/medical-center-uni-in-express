import express from "express";
import { errorAsReponse } from "./middleware/error.middleware.ts";

const app = express();
const port = process.env.PORT;

app.get("/health", (_, res) => {
  res.send({
    status: "ok",
    timestamp: Date.now(),
  });
});

app.use(errorAsReponse);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
