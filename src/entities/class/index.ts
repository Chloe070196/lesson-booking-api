import { Entity, Column } from "typeorm";
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes";
import { StudentInterface } from "../student/interface";
import { MethodInterface } from "../method/interface";

@Entity()
export class Class extends InstanceIdentification {
  @Column()
  userId: number;
  @Column()
  name: string;
  @Column()
  students?: Array<StudentInterface>;
  @Column()
  equipment?: string;
  @Column()
  level: string;
  @Column()
  lessons?: Array<LessonInterface>;
  @Column()
  methodId: number;
  @Column()
  method?: MethodInterface;
}
