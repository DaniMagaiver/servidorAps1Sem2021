import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../models/User";

@Entity('users')
export class Users{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    company: string;

    @Column()
    phone:string;

    @Column()
    email:string;

    @Column()
    occupation:string;

    @Column()
    standardScrap:string;
}
