import { Entity, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class TimeSlot extends InstanceIdentification {
    @Column()
    activity?: string;
    @Column()
    available: boolean;
    @Column()
    lessonId?: number;
    @Column()
    lesson?: LessonInterface;
    @Column()
    startTime: Date;
}
