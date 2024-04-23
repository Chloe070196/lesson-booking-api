import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { MethodInterface } from "../method/interface";

@Entity()
export class Qualification {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    obtainedOn: Date;
    @Column()
    issuedBy: string;
    @Column()
    notes: string;
    @Column()
    methodId: number;
    @Column()
    method?: MethodInterface;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
