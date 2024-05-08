import { DataSource, ObjectType } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder";

export class CrudRepository<T> {
  dataSource: DataSource;
  helpers: CrudRepositoryHelpers<T>;

  constructor(dataSource: DataSource, helpers: CrudRepositoryHelpers<T>) {
    this.dataSource = dataSource;
    this.helpers = helpers;
  }

  async create(values: QueryDeepPartialEntity<T>, entity: ObjectType<T>) {
    const columnList = this.helpers.getEntityColumnNameList(entity);
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values(values)
      .returning(columnList)
      .execute();
  }

  async read(
    entity: ObjectType<T>,
    condition: Object
  ) {
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
