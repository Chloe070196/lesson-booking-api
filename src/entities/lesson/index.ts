import { Entity, Column, OneToOne, JoinTable, ManyToMany } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { TimeSlot } from "../timeslot/index.ts";
import { Booking } from "../booking/index.ts";
import { Class } from "../class/index.ts";
import { Location } from "../location/index.ts";

@Entity()
export class Lesson extends InstanceIdentification {
    @Column()
    name: string;
    @Column()
    timeSlotId: number;
    @Column({nullable: true})
    notes?: string;
    @Column()
    cover: boolean;
    @OneToOne(() => TimeSlot)
    @JoinTable()
    timeSlot: TimeSlot;
    @ManyToMany(() => Booking)
    @JoinTable()
    bookings: Booking[];
    @OneToOne(() => Class)
    @JoinTable()
    class?: Class; 
    @OneToOne(() => Location)
    @JoinTable()
    location?: Location;
}
