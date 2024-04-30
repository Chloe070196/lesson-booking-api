import { Entity, Column } from "typeorm"
import { QuestionInterface } from "../question/interface";
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class Answer extends InstanceIdentification {
    @Column()
    questionId: number;
    @Column()
    question?: QuestionInterface;
    @Column()
    content: string;
}
