import { Entity, Column } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { Lesson } from "../lesson/index.ts";

@Entity()
export class TimeSlot extends InstanceIdentification {
    @Column({nullable: true})
    activity?: string;
    @Column()
    available: boolean;
    @Column({nullable: true})
    lessonId?: number;
    @Column({nullable: true})
    lesson?: Lesson;
    @Column()
    startTime: Date;
}
