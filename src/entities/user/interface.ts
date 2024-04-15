export interface UserInterface {
  id: number;
  username: string;
  email: string;
  password: string;
  studentId?: number;
  teacherId?: number;
  createdAt: Date;
  updatedAt: Date;
}

