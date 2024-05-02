import { Entity, Column, ManyToOne, JoinTable } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { Method } from "../method/index.ts";

@Entity()
export class Qualification extends InstanceIdentification {
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    obtainedOn: Date;
    @Column()
    issuedBy: string;
    @Column({nullable: true})
    notes?: string;
    @ManyToOne(() => Method)
    @JoinTable()
    method?: Method;
}
