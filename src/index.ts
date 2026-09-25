import express from "express";
import { errorAsReponse } from "./middleware/error.middleware.ts";
import { ticketRouter } from "./routes/ticket.routes.ts";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (_, res) => {
  res.send({
    status: "ok",
    timestamp: Date.now(),
  });
});

app.use(ticketRouter);

app.use(errorAsReponse);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
