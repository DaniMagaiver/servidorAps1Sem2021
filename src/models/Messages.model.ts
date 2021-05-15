import { Users } from ".";
import { IsUUID } from "class-validator";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Talks from "./Talks.model";

@Entity()
export default class Messages {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (user) => user.messages)
  @IsUUID()
  user: Users;

  @ManyToOne(() => Talks, (talk) => talk.messages)
  talk: Talks;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
