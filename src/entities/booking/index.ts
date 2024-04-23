import { Entity, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes";
import { StudentInterface } from "../student/interface";

@Entity()
export class Booking extends InstanceIdentification {
    @Column()
    @Column()
    attendees: number;
    @Column()
    note: string;
    @Column()
    lessonId: number;
    @Column()
    lesson?: LessonInterface;
    @Column()
    studentId: number;
    @Column()
    student: StudentInterface;
}
