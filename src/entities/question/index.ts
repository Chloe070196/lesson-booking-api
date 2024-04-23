import { Entity, Column } from "typeorm";
import { ClassInterface } from "../class/interface";
import { AnswerInterface } from "../answer/interface";
import { MethodInterface } from "../method/interface";
import { InstanceIdentification } from "../inherited_classes";

@Entity()
export class Question extends InstanceIdentification {
  @Column()
  content: string;
  @Column()
  answerId: number;
  @Column()
  answer?: AnswerInterface;
  @Column()
  method?: MethodInterface;
  @Column()
  class?: ClassInterface;
}
