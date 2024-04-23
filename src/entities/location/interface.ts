import { LessonInterface } from "../lesson/interface";

export interface LocationInterface {
  id: number;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  notes: string;
  lesson?: LessonInterface;
  lessonId?: number;
  gettingThere: string;
}
