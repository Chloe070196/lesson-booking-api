import { Entity, Column } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class User extends InstanceIdentification {
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    studentId: string;
    @Column()
    teacherId: number;
}
