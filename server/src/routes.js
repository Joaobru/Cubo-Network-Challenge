import { Router } from "express";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.indexById);
routes.put("/user/:id", UserController.update);
routes.post("/user", UserController.store);
routes.delete("/user/:id", UserController.delete);

export default routes;
