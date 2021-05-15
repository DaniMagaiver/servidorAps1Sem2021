import { MessagesService } from "./Messages.service";
import { FindOneOptions, getConnection, Repository } from "typeorm";
import { Users } from "../models";
import { UsersService } from "./Users.service";
import * as _ from "lodash";

import Talks from "../models/Talks.model";
import Services from "./Services";
import Messages from "../models/Messages.model";

export class TalksService extends Services {
  repository: Repository<Talks>;
  constructor() {
    super(Talks);
  }

  async sendMessage({
    senderId,
    destinataryId,
    message,
  }: {
    senderId: string;
    destinataryId: string;
    message: string;
  }) {
    this.isValidId(senderId);
    this.isValidId(destinataryId);
    const userService = new UsersService();
    const messageService = new MessagesService();
    if (!message) throw new Error("A mensagem não pode estar vazia.");
    const sender: Users = await userService.findOne(senderId);
    const destinatary: Users = await userService.findOne(destinataryId);
    const commomTalk = this.getCommomTalk(sender, destinatary);
    if (commomTalk) {
      const talk = await this.repository.findOne(commomTalk);
      if (talk) await messageService.create({ message, sender, talk });
      return this.repository.findOne(commomTalk);
    } else {
      return this.create({ sender, destinatary, message });
    }
  }

  private getCommomTalk(user1: Users, user2: Users) {
    console.log(user1);
    console.log(user2);
    const user1Talks = user1.talks.map(({ id }) => id);
    const user2Talks = user2.talks.map(({ id }) => id);
    const [commomTalk] = _.intersection(user1Talks, user2Talks);
    return commomTalk;
  }

  async create({
    sender,
    destinatary,
    message,
  }: {
    sender: Users;
    destinatary: Users;
    message: string;
  }) {
    const messageService = new MessagesService();
    const talk = new Talks();
    const newMessage = new Messages();
    talk.users = [sender, destinatary];
    newMessage.talk = talk;
    newMessage.message = message;

    return new Promise(async (resolve, reject) => {
      const connection = getConnection();
      const queryRunner = connection.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try {
        const newTalk = await this.repository.save(talk);
        await messageService.create({ message, sender, talk });
        await queryRunner.commitTransaction();
        resolve(newTalk);
      } catch (error) {
        await queryRunner.rollbackTransaction();
        reject(error.message);
      }
    });
  }

  async listTalks() {
    return this.repository
      .createQueryBuilder("talks")
      .leftJoinAndSelect("talks.users", "user")
      .getRawMany();
  }

  async findOne(id: string) {
    this.isValidId(id);
    return this.repository
      .createQueryBuilder("talk")
      .where("talk.id = :id", { id }).leftJoinAndSelect('talk.messages', 'messages').leftJoinAndSelect('messages.user','users').getOne();
    // return this.repository.findOne({where: {id}});
  }
}
