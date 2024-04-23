import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserInterface } from "../user/interface";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    userId: number;
    @Column()
    user: UserInterface;
    @Column()
    intro: string;
    @Column()
    aboutParagraphs: string[];
    @Column()
    portraitImgUrl: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
