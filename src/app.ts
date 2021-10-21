import { Express } from "express";

import { createServer } from "@exmpl/utils/server";

createServer()
  .then((server: Express) => {
    server.listen(6001, () => {
      console.info("Server listening at port 6001");
    });
  })
  .catch((err: Error) => {
    console.error(`Error while creating a server: ${err.message}`);
  });
