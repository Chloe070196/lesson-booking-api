import { Entity, Column } from "typeorm"
import { BookingInterface } from "../booking/interface";
import { ClassInterface } from "../class/interface";
import { LocationInterface } from "../location/interface";
import { TimeSlotInterface } from "../timeslot/interface";
import { InstanceIdentification } from "../inherited_classes";

@Entity()
export class Lesson extends InstanceIdentification {
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
}
