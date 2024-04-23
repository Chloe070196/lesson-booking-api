import { Entity, Column } from "typeorm"
import { MethodInterface } from "../method/interface";
import { InstanceIdentification } from "../inherited_classes";

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
    @Column()
    notes: string;
    @Column()
    methodId: number;
    @Column()
    method?: MethodInterface;
}
