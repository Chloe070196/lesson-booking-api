import { DataSource, EntityTarget } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder";
import { isNotStringType } from "../../utils/checkDataType.ts";

export class CrudRepository<T> {
  dataSource: DataSource;
  helpers: CrudRepositoryHelpers<T>;

  constructor(
    dataSource: DataSource,
    helpers: CrudRepositoryHelpers<T>,
  ) {
    this.dataSource = dataSource;
    this.helpers = helpers;
  }

  async create(values: QueryDeepPartialEntity<T>, entity: EntityTarget<T>) {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values(values)
      .returning(["id", "username"])
      .execute();
  }

  async read(entity: EntityTarget<T>, condition: Object) {
    if (!isNotStringType(entity)) {
      throw new Error ("incorrect data type")
    }
    const alias = this.helpers.buildIntoAlias(entity)
    const conditionStr = this.helpers.buildWhereConditionString(
      entity,
      condition
    );
      return await this.dataSource
        .getRepository(entity.name)
        .createQueryBuilder(alias)
        .where(conditionStr, condition)
        .getOne();
  }
}
