import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserInterface } from "../user/interface";
import { BookingInterface } from "../booking/interface";
import { LessonInterface } from "../lesson/interface";
import { ClassInterface } from "../class/interface";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    userId: number;
    @Column()
    user: UserInterface;
    @Column()
    bookings?: Array<BookingInterface>;
    @Column()
    wishlist?: Array<LessonInterface>;
    @Column()
    classes?: Array<ClassInterface>;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
