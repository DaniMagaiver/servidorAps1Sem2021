import { Request, Response } from "express";
import { MessagesService } from "./../services/Messages.service";
export default class MessagesController {
  static async getMessages(request: Request, response: Response) {

  }

  static async getOneMessage() {}

  static async createMessage() {}

  static async deleteMessage() {}
}
