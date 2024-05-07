import bcrypt from "bcrypt";
import { UserRepository } from "../../repositories/user/index.ts";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { User } from "../../entities/user/index.js";
import { ObjectLiteral } from "typeorm";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  hash(string: string) {
    return bcrypt.hash(string, 8);
  }

  removeSensitiveInfo(obj: ObjectLiteral, fieldNameList: Array<string>) {
    fieldNameList.forEach((fieldName) => {
      delete obj[fieldName];
    });
    return obj;
  }

  async register(user: User) {
    user.password = await this.hash(user.password);
    const partialUser: QueryDeepPartialEntity<User> = {
      email: user.email,
      username: user.username,
      password: user.password,
    };
    return await this.userRepository.post(partialUser);
  }

  async doesUserExist(email: string) {
    const foundUser = await this.userRepository.getUserBy({ email });
    return !!foundUser;
  }
}
