import { Entity, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { InstanceIdentification } from "../inherited_classes.ts";
import { Student } from "../student/index.ts";
import { Lesson } from "../lesson/index.ts";
import { Method } from "../method/index.ts";

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
  @ManyToOne(() => Method)
  method: Method;
  @ManyToMany(() => Student)
  students?: Student[];
  @OneToMany(() => Lesson, () => Class)
  lessons?: Lesson[];
}
