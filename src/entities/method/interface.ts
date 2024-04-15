import { ClassInterface } from "../class/interface";
import { LessonInterface } from "../lesson/interface";
import { QualificationInterface } from "../qualification/interface";

export interface MethodInterface {
    id: number;   
    name: string;   
    description: string;   
    classes?: Array<ClassInterface>;    
    lessons?: Array<LessonInterface>;   
    qualifications?: Array<QualificationInterface>; 
    createdAt: Date; 
    updatedAt: Date; 
}
