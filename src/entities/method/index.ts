import { Entity, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { ClassInterface } from "../class/interface";
import { QualificationInterface } from "../qualification/interface";
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class Method extends InstanceIdentification {
    @Column()
    name: string;   
    @Column()
    description: string;   
    @Column()
    classes?: Array<ClassInterface>;    
    @Column()
    lessons?: Array<LessonInterface>;   
    @Column()
    qualifications?: Array<QualificationInterface>; 
}
