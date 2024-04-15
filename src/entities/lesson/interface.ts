import { BookingInterface } from "../booking/interface";
import { ClassInterface } from "../class/interface";
import { TimeSlotInterface } from "../timeslot/interface";
import { LocationInterface } from "../location/interface";

export interface LessonInterface {
  id: number;
  name: string;
  timeSlotId: number;
  timeSlot: TimeSlotInterface;
  bookings: Array<BookingInterface>;
  classId?: number; 
  class?: ClassInterface; 
  locationId: number;
  location: LocationInterface;
  notes: string;
  cover: boolean;
  createdAt: Date;
  updatedAt: Date;
}
