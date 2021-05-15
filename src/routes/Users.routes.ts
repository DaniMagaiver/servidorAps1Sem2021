import UserController from "./../controllers/Users.controller";
import { Router } from "express";

const usersRouter = Router();

usersRouter
  .post("/", UserController.create)
  .get("/", UserController.getAll)
  .get("/:userId", UserController.findOne)
  .get('/findByEmail/:userEmail', UserController.findByEmail)
  .get('/findByName/:userName', UserController.findByName)
  .put("/:userId", UserController.update)
  .delete("/:userId", UserController.remove);

export default usersRouter;
