import { QuestionInterface } from "../question/interface";

export interface AnswerInterface {
  id: number;
  questionId: number;
  question?: QuestionInterface;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
