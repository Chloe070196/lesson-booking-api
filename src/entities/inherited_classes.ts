import { PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm"

export abstract class InstanceIdentification {
    @PrimaryGeneratedColumn()
    id: number
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}