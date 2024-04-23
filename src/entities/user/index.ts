import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
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
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
