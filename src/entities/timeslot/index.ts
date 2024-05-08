import { Entity, Column, OneToOne, JoinTable } from "typeorm"
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
    @OneToOne(() => Lesson, {nullable: true})
    @JoinTable()
    lesson?: Lesson;
    @Column()
    startTime: Date;
}
