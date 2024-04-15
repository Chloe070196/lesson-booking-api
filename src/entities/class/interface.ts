import { LessonInterface } from "../lesson/interface";
import { MethodInterface } from "../method/interface";
import { StudentInterface } from "../student/interface";

export interface ClassInterface {
  id: number;
  name: string;
  students?: Array<StudentInterface>;
  equipment?: string;
  level: string;
  lessons?: Array<LessonInterface>;
  methodId: number;
  method?: MethodInterface;
  createdAt: Date;
  updatedAt: Date;
}
