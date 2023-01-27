import { Server } from "http";
import express from "express";
import allRoutes from "./routes";

const app = express();

// setup middlewares
app.use(express.json());
app.use(express.static("public"));
app.use("/", allRoutes);

function listen(port: number): Server {
  return app.listen(port, () => {
    console.log(`App is listening on the PORT ${port} ...`);
  });
}

export { listen };
