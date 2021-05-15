import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToMany,
  OneToMany,
} from "typeorm";

import { IsEmail, IsNotEmpty } from "class-validator";
import Talks from "./Talks.model";
import Messages from "./Messages.model";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsNotEmpty({ message: "Campo nome obrigatório" })
  name: string;

  @Column({ nullable: true })
  company: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  @IsEmail({}, { message: "Email inválido" })
  email: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ nullable: true })
  standardScrap: string;

  @Column({ nullable: true })
  status: string;

  @ManyToMany(() => Talks, (talk) => talk.users, { cascade: true, eager:true})
  talks: Talks[];

  @OneToMany(() => Messages, (message) => message.user, {
    lazy:true,
    cascade: true,
  })
  messages: Messages[];

  @DeleteDateColumn({ type: "datetime" })
  deletedAt?: Date;
}
