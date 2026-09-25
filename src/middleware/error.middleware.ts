import type { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../error/application.error.ts";

export function errorAsReponse(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const statusCode = error instanceof ApplicationError ? error.statusCode : 500;
  response.status(statusCode).send({
    status: "error",
    message: error.message ?? "Something went terribly wrong",
  });
}
