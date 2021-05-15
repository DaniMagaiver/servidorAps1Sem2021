import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from ".";
import Messages from "./Messages.model";

@Entity()
export default class Talks {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(() => Users, (user) => user.talks)
  @JoinTable()
  users: Users[];

  @OneToMany(() => Messages, (message) => message.talk, {
    cascade: true,
    eager: true,
  })
  messages: Messages[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
