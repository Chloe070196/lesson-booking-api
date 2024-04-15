import { MethodInterface } from "../method/interface";

export interface QualificationInterface {
  id: number;
  name: string;
  description: string;
  obtainedOn: Date;
  issuedBy: string;
  notes: string;
  methodId: number;
  method?: MethodInterface;
  createdAt: Date;
  updatedAt: Date;
}
