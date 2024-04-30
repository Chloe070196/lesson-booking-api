import { Entity, Column } from "typeorm"
import { UserInterface } from "../user/interface";
import { BookingInterface } from "../booking/interface";
import { LessonInterface } from "../lesson/interface";
import { ClassInterface } from "../class/interface";
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class Student extends InstanceIdentification {
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
}
