import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ClassInterface } from "../class/interface";
import { AnswerInterface } from "../answer/interface";
import { MethodInterface } from "../method/interface";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
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
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
