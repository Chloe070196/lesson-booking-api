import { Entity, Column, OneToMany, JoinColumn, ManyToMany, OneToOne } from "typeorm"
import { BookingInterface } from "../booking/interface";
import { LessonInterface } from "../lesson/interface";
import { ClassInterface } from "../class/interface";
import { InstanceIdentification } from "../inherited_classes.ts";
import { Booking } from "../booking/index.ts";
import { Lesson } from "../lesson/index.ts";
import { Class } from "../class/index.ts";

@Entity()
export class Student extends InstanceIdentification {
    @OneToMany(() => Booking, () => Student)
    bookings?: Array<BookingInterface>;
    @OneToMany(() => Lesson, () => Student)
    wishlist?: Array<LessonInterface>;
    @ManyToMany(() => Class, () => Student)
    @JoinColumn()
    classes?: Array<ClassInterface>;
}
