import { Entity, Column, OneToOne, JoinTable } from "typeorm";
import { InstanceIdentification } from "../inherited_classes.ts";
import { Answer } from "../answer/index.ts";
import { Class } from "../class/index.ts";
import { Method } from "../method/index.ts";

@Entity()
export class Question extends InstanceIdentification {
  @Column()
  content: string;
  @OneToOne(() => Answer)
  @JoinTable()
  answer?: Answer;
  @OneToOne(() => Method)
  @JoinTable()
  method?: Method;
  @OneToOne(() => Class)
  @JoinTable()
  class?: Class;
}
