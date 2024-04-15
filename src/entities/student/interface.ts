import { BookingInterface } from "../booking/interface";
import { ClassInterface } from "../class/interface";
import { LessonInterface } from "../lesson/interface";
import { UserInterface } from "../user/interface";

export interface StudentInterface {
  id: number;
  userId: number;
  user: UserInterface;
  bookings?: Array<BookingInterface>;
  wishlist?: Array<LessonInterface>;
  classes?: Array<ClassInterface>;
  createdAt: Date;
  updatedAt: Date;
}
