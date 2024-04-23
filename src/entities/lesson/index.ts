import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BookingInterface } from "../booking/interface";
import { ClassInterface } from "../class/interface";
import { LocationInterface } from "../location/interface";
import { TimeSlotInterface } from "../timeslot/interface";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    timeSlotId: number;
    @Column()
    timeSlot: TimeSlotInterface;
    @Column()
    bookings: Array<BookingInterface>;
    @Column()
    classId?: number; 
    @Column()
    class?: ClassInterface; 
    @Column()
    locationId: number;
    @Column()
    location: LocationInterface;
    @Column()
    notes: string;
    @Column()
    cover: boolean;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
