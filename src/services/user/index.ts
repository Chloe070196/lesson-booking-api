import bcrypt from "bcrypt";
import { UserRepository } from "../../repositories/user/index.ts";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { User } from "../../entities/user/index.js";
import jwt from "jsonwebtoken";


// TODO: write integration tests
export class UserService {
  constructor(private userRepository: UserRepository) {}

  private hash(string: string) {
    return bcrypt.hash(string, 8);
  }

  private async isSamePassword(string: string, hashedValue: string) {
    return await bcrypt.compare(string, hashedValue)
  }
  
  async register(user: User) {
    user.password = await this.hash(user.password);
    const partialUser: QueryDeepPartialEntity<User> = {
      email: user.email,
      username: user.username,
      password: user.password,
    };
    // TODO: add error handling for both requests
    const response = await this.userRepository.insertUser(partialUser)
    const identifier = response.identifiers[0]
    return await this.userRepository.getUserBy(identifier);
  }

  async doesUserExist(email: string) {
    const foundUser = await this.userRepository.getUserBy({ email });
    return !!foundUser;
  }

  async checkCredentials(email: string, password: string ){
    const user = await this.userRepository.getUserWithAllProperties({ email })
    if (!user) {
      throw new Error('error logging in')
    }
    return this.isSamePassword(password, user.password)
  }

  async generateJwt(email){
    const user = await this.userRepository.getUserWithAllProperties({ email })
    if (!user) {
      throw new Error('error logging in')
    }
    return jwt.sign({ username: user.username, userId: user.id },  process.env.JWT_SECRET)
  }
}
