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

  async getUserWithPassword(condition: Object) {
    const alias = this.helpers.buildIntoAlias(User);
    const conditionStr = this.helpers.buildWhereConditionString(
      User,
      condition
    );
    return await this.dataSource
      .getRepository(User.name)
      .createQueryBuilder(alias)
      .addSelect('user.password')
      .where(conditionStr, condition)
      .getOne();
  }

  async insertUser(user: QueryDeepPartialEntity<User>) {
    return await this.insert(user, User)
  }
}
