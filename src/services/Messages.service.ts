import { Repository } from "typeorm";
import { Users } from "../models";
import Messages from "../models/Messages.model";
import Talks from "../models/Talks.model";
import Services from "./Services";

export class MessagesService extends Services {
  repository: Repository<Messages>;
  constructor() {
    super(Messages);
  }

  async create({
    talk,
    sender,
    message,
  }: {
    talk: Talks;
    sender: Users;
    message: string;
  }) {
    return this.repository.save({ talk, message, user:sender});
  }

  
}
