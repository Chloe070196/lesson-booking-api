import { Entity, Column, OneToOne, JoinColumn } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes.ts";
import { StudentInterface } from "../student/interface";
import { Lesson } from "../lesson/index.ts";
import { Student } from "../student/index.ts";

@Entity()
export class Booking extends InstanceIdentification {
    @Column()
    attendees: number;
    @Column({nullable: true})
    note?: string;
    @OneToOne(() => Lesson)
    @JoinColumn()
    lesson: Lesson;
    @OneToOne(() => Student)
    @JoinColumn()
    student: Student;
}
