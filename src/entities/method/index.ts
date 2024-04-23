import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { LessonInterface } from "../lesson/interface";
import { ClassInterface } from "../class/interface";
import { QualificationInterface } from "../qualification/interface";

@Entity()
export class Method {
    @PrimaryGeneratedColumn()
    @Column()
    id: number
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
    @Column()
    createdAt: Date; 
    @Column()
    updatedAt: Date; 
}
