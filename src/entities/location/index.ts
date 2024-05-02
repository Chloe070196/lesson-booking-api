import { Entity, Column, OneToOne, JoinTable, LessThan } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes.ts";
import { Lesson } from "../lesson/index.ts";

@Entity()
export class Location extends InstanceIdentification {
    @Column()
    country: string;
    @Column()
    city: string;
    @Column()
    postalCode: string;
    @Column()
    street: string;
    @Column({nullable: true})
    notes?: string;
    @Column({nullable: true})
    gettingThere?: string;
    @OneToOne(() => Lesson)
    @JoinTable()
    lesson?: Lesson;
}
