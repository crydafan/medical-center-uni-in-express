import type { Request, Response, NextFunction } from "express";

export function errorAsReponse(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.status(500).send({
    status: "error",
    message: error.message ?? "Something went terribly wrong",
  });
}
