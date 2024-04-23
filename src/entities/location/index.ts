import { Entity, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { InstanceIdentification } from "../inherited_classes";

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
    @Column()
    notes: string;
    @Column()
    lesson?: LessonInterface;
    @Column()
    lessonId?: number;
    @Column()
    gettingThere: string;
}
