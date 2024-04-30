import { DataSource, EntityTarget, Repository, ObjectType } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder";

export class CrudRepository<T> {
  dataSource: DataSource;
  helpers: CrudRepositoryHelpers<T>;
  repository: Repository<T>;

  constructor(
    dataSource: DataSource,
    helpers: CrudRepositoryHelpers<T>,
    entity: ObjectType<T>
  ) {
    this.dataSource = dataSource;
    this.helpers = helpers;
    this.repository = this.dataSource.getRepository(entity);
  }

  async create(values: QueryDeepPartialEntity<T>, entity: EntityTarget<T>) {
    console.log('user created', values)
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values(values)
      .returning(["id", "username"])
      .execute();
    return values
  }
  async read(entity: EntityTarget<T>, condition: Object) {
    const alias = this.helpers.buildIntoAlias(entity);
    const conditionStr = this.helpers.buildWhereConditionString(
      entity,
      condition
    );
    console.log(entity)
    await this.dataSource
      .getRepository(entity)
      .createQueryBuilder()
      .where(conditionStr, condition)
      .getOne();
  }
  async update(entity: EntityTarget<T>) {
    await this.dataSource.createQueryBuilder().insert().into(entity).execute();
  }
  async delete(id: number, entity: EntityTarget<T>, condition: Object) {
    const conditionStr = this.helpers.buildWhereConditionString(
      entity,
      condition
    );
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(entity)
      .where(conditionStr, condition)
      .execute();
  }
}
