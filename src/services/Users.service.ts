import { Repository } from "typeorm";
import { Users } from "../models";
import Services from "./Services";

export class UsersService extends Services {
  repository: Repository<Users>;
  constructor() {
    super(Users);
  }
}
