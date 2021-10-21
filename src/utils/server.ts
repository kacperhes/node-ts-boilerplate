import express, { Express } from "express";

export async function createServer(): Promise<Express> {
  const server = express();

  server.get("/", (req, res) => {
    res.send("Welcome to the API");
  });

  return server;
}
