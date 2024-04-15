import { LessonInterface } from "../lesson/interface";
import { StudentInterface } from "../student/interface";

export interface BookingInterface {
  id: number;
  attendees: number;
  note: string;
  lessonId: number;
  lesson?: LessonInterface;
  studentId: number;
  student: StudentInterface;
  createdAt: Date;
  updatedAt: Date;
}
