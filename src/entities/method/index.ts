import { Entity, Column, ManyToMany, JoinTable } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";
import { Class } from "../class/index.ts";
import { Lesson } from "../lesson/index.ts";
import { Qualification } from "../qualification/index.ts";

@Entity()
export class Method extends InstanceIdentification {
    @Column()
    name: string;   
    @Column()
    description: string;   
    @ManyToMany(() => Class)
    @JoinTable()
    classes?: Class[];    
    @ManyToMany(() => Lesson)
    @JoinTable()
    lessons?: Lesson;   
    @ManyToMany(() => Qualification)
    @JoinTable()
    qualifications?: Qualification[]; 
}
