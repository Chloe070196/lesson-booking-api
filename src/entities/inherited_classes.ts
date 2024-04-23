import { PrimaryGeneratedColumn, Column } from "typeorm"

export abstract class InstanceIdentification {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}