import { Hono } from "hono";
import { prisma } from "./application/database";
const app = new Hono();

console.log("Database Client:", prisma);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
