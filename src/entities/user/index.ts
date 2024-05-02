import { Entity, Column } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class User extends InstanceIdentification {
    @Column()
    username: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
    @Column({nullable: true})
    studentId: string;
    @Column({nullable: true})
    teacherId: number;
}
