import { Entity, Column, OneToOne, JoinColumn } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { Question } from "../question/index.ts";

@Entity()
export class Answer extends InstanceIdentification {
    @Column()
    questionId: number;
    @Column()
    content: string;
    @OneToOne(() => Question)
    @JoinColumn()
    question: Question;
}
