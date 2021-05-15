import { Like, Repository } from "typeorm";
import { Users } from "../models";
import Services from "./Services";

export class UsersService extends Services {
  repository: Repository<Users>;
  constructor() {
    super(Users);
  }

  async findByEmail(userEmail: string) {
    return this.repository.findOne({
      where: { email: userEmail },
      loadEagerRelations: false,
    });
  }

  async findByName(userName: string) {
    return this.repository.find({ name: Like(`%${userName}%`) });
  }
}
