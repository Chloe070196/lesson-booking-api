import { DataSource, FindOptionsWhere, ObjectType } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder";

export class CrudRepository<T> {
  dataSource: DataSource;
  helpers: CrudRepositoryHelpers<T>;

  constructor(dataSource: DataSource, helpers: CrudRepositoryHelpers<T>) {
    this.dataSource = dataSource;
    this.helpers = helpers;
  }

  async insert(values: QueryDeepPartialEntity<T>, entity: ObjectType<T>) {
    const res = await this.dataSource.getRepository(entity).insert(values)
    return res
  }

  async readOneBy(entity: ObjectType<T>, condition: FindOptionsWhere<T>) {
    const result = await this.dataSource.getRepository(entity).findOneBy(condition)
    return result
  }

  async readOneIncludeAllProperties(entity: ObjectType<T>, condition: Object) {
    const alias = this.helpers.buildIntoAlias(entity);
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
