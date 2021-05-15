import UserController from "./../controllers/Users.controller";
import { Router } from "express";

const usersRouter = Router();

usersRouter
  .post("/", UserController.create)
  .get("/", UserController.getAll)
  .get("/:userId", UserController.findOne)
  .put("/:userId", UserController.update)
  .delete("/:userId", UserController.remove);

export default usersRouter;
