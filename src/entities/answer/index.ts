import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { QuestionInterface } from "../question/interface";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    questionId: number;
    @Column()
    question?: QuestionInterface;
    @Column()
    content: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
