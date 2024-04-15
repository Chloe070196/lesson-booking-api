import { AnswerInterface } from "../answer/interface";
import { ClassInterface } from "../class/interface";
import { MethodInterface } from "../method/interface";

export interface QuestionInterface {
id: number;
content: string;
answerId: number;
answer?: AnswerInterface;
method?: MethodInterface;
class?: ClassInterface;
createdAt: Date;
updatedAt: Date;
}