import { Entity, Column, OneToOne, JoinColumn } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { Student } from "../student/index.ts";
import { Teacher } from "../teacher/index.ts";

// the teacher is the sole admin, and this will be their personal website.
// their unique role exists so that they can update their personal information
// and also access CRUD methods on lessons, classes, methods, etc.
// which only they will be able to use
export enum UserRole {
    ADMIN = "teacher",
    STUDENT = "student",
}

@Entity()
export class User extends InstanceIdentification {
    @Column()
    username: string;
    @Column({ unique: true })
    email: string;
    @Column({ select: false })
    password: string;
    // TODO: ensure that this is impossible to update without admin permission
    @Column({ default: "student" })
    role: UserRole;
    @OneToOne(() => Student, { nullable: true })
    @JoinColumn()
    student: Student;
    @OneToOne(() => Teacher, { nullable: true })
    @JoinColumn()
    teacher: Teacher;
}
