import { createClient } from "redis";

export const redisClient = createClient();

redisClient.on("error", (error) => {
  console.error("Redis client error", error);
});

await redisClient.connect();
