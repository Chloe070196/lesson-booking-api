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
    return await this.readOneBy(User, uniqueProperty);
  }
  async getUserWithAllProperties(uniqueProperty: Object) {
    return await this.readOneIncludeAllProperties(User, uniqueProperty)
  }
  async insertUser(user: QueryDeepPartialEntity<User>) {
    return await this.insert(user, User)
  }
}
