import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    country: string;
    @Column()
    city: string;
    @Column()
    postalCode: string;
    @Column()
    street: string;
    @Column()
    notes: string;
    @Column()
    lesson?: LessonInterface;
    @Column()
    lessonId?: number;
    @Column()
    gettingThere: string;
}
