import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes.ts";
import { StudentInterface } from "../student/interface";
import { MethodInterface } from "../method/interface";
import { Student } from "../student/index.ts";
import { Lesson } from "../lesson/index.ts";

@Entity()
export class Class extends InstanceIdentification {
  @Column()
  userId: number;
  @Column()
  name: string;
  @Column({nullable: true})
  equipment?: string;
  @Column()
  level: string;
  @Column()
  methodId: number;
  @Column()
  method: MethodInterface;
  @ManyToMany(() => Student)
  @JoinTable()
  students?: Student[];
  @ManyToMany(() => Lesson)
  @JoinTable()
  lessons?: Lesson[];
}
