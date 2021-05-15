import { EntityRepository, Repository } from "typeorm";
import Talks from "../models/Talks.model";

@EntityRepository(Talks)
export class TalkRepository extends Repository<Talks> {
  listTalks(userId: string) {
    return this.createQueryBuilder("talks").leftJoinAndSelect(
      "talks.users",
      "users",
      "users.id = talks.userId"
    );
  }
}
