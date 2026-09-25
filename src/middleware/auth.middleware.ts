import type { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../error/application.error.ts";

export function validateBearer(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const auth = request.headers.authorization;
  if (!auth) {
    throw new ApplicationError("Token is required", 401);
  }
  const [method, token] = auth.split(" ");
  if (
    !method ||
    !token ||
    method !== "Bearer" ||
    token !== process.env.API_ACCESS_TOKEN
  ) {
    throw new ApplicationError("Invalid token", 403);
  }
  next();
}
