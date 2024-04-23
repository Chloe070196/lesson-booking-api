import { UserInterface } from "../user/interface";

export interface TeacherInterface {
  id: number;
  userId: number;
  user: UserInterface;
  intro: string;
  aboutParagraphs: string[];
  portraitImgUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
