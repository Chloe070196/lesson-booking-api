import { UserInterface } from "./interface";

export class User implements UserInterface {
  id;
  username;
  email;
  password;
  studentId;
  teacherId;
  createdAt;
  updatedAt;

  constructor(userData: UserInterface) {
    this.id = userData.id;
    this.username = userData.username;
    this.email = userData.email;
    this.password = userData.password;
    this.studentId = userData.studentId;
    this.teacherId = userData.teacherId;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
  }

	fromDb(user: UserInterface) {
		return new User(user)
	}
}
