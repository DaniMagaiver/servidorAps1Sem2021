import { Router } from "express";
import MessagesController from "../controllers/Messages.controller";
import TalksController from "../controllers/Talks.controller";

const talksRouter = Router();

talksRouter
  .get("/findUserTalk/:userId", TalksController.listTalks)
  .post("/:userId", TalksController.createTalk)
  .get("/:talkId", TalksController.findOneTalk)
  .post("/:talkId", MessagesController.createMessage)
  .delete("/:messageId", MessagesController.deleteMessage)

export default talksRouter;
