import { DataSource, ObjectLiteral } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { User } from "../../entities/user/index.ts";
import { CrudRepository } from "../crud-repository/index.ts";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder.ts";

export class UserRepository extends CrudRepository<User> {
  constructor(
    dataSource: DataSource,
    helpers: CrudRepositoryHelpers<User>,
  ) {
    super(dataSource, helpers);
  }

  async getUserBy(uniqueProperty: Object): Promise< void | ObjectLiteral> {
    return await this.read(User, uniqueProperty);
  }
  async post(user: QueryDeepPartialEntity<User>) {
    return await this.create(user, User)
  }
}
