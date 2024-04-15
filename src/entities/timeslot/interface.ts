import { LessonInterface } from "../lesson/interface";

export interface TimeSlotInterface {
  id: number;
  activity?: string;
  available: boolean;
  lessonId?: number;
  lesson?: LessonInterface;
  startTime: Date;
  endTime: Date;
  date: Date;
}
