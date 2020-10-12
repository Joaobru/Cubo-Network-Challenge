import express from "express";
import routes from "./routes";
import cors from 'cors';
import dotenv from 'dotenv';

import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    dotenv.config();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
