import { Users } from "../models";
import { UsersService } from "./../services/Users.service";
import { Request, Response } from "express";
import { TalksService } from "../services";
import Talks from "../models/Talks.model";

export default class TalksController {
  static async createTalk(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const { destinataryId, message } = request.body;
      const talkService = new TalksService();
      const talks = await talkService.sendMessage({
        destinataryId,
        senderId: userId,
        message,
      });
      return response.status(200).json(talks);
    } catch (error) {
      response.status(500).json(error.message);
    }
  }

  static async listTalks(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const talksService = new TalksService();
      const userService = new UsersService();
      const user: Users = await userService.findOne(userId);
      const talks = await talksService.listTalks();
      const userTalks = user.talks.map(({ id }) => id);
      const userContacts = talks.filter(
        ({ talks_id, user_id }) =>
          userTalks.includes(talks_id) && user_id !== userId
      );
      return response.status(200).json(userContacts);
    } catch (error) {
      response.status(500).json(error.message);
    }
  }

  static async findOneTalk(request: Request, response: Response) {
    try {
      const { talkId } = request.params;
      const talkService = new TalksService();
      const talk = await talkService.findOne(talkId);
      
      return response.status(200).json(talk);
    } catch (error) {
      response.status(404).json(error.message);
    }
  }
}
