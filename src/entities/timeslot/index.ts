import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";

@Entity()
export class TimeSlot {
    @PrimaryGeneratedColumn()
    id: number
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
    @Column()
    endTime: Date;
    @Column()
    date: Date;
}
