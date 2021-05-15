import { isUUID } from "class-validator";
import { EntityTarget, getRepository, Repository } from "typeorm";
import {} from "uuid";

export default class Services {
  repository: Repository<any>;
  constructor(repository: EntityTarget<any>) {
    this.repository = getRepository(repository);
  }

  protected isValidId(id:string){
    const isuuid = isUUID(id);
    if (!isuuid) throw new Error("ID inválido");
  }

  create(data: any) {
    return this.repository.save(data);
  }

  listAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    this.isValidId(id)
    return this.repository.findOne(id);
  }

  remove(id: string) {
    this.isValidId(id)
    return this.repository.softDelete(id);
  }

  update(id: string, data: any) {
    this.isValidId(id)
    return this.repository.update(id, data);
  }
}
