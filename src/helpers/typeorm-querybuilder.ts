import { ObjectType } from "typeorm";
import { isNotStringType } from "../utils/checkDataType.ts";
import { dataSource } from "../dataSource.ts";

export class CrudRepositoryHelpers<T> {
  buildIntoAlias(entity: ObjectType<T>) {
    if (isNotStringType(entity)) {
      return entity.name.toLowerCase();
    }
    throw new Error("error building alias - incorrect type");
  }

  buildWhereConditionString(entity: ObjectType<T>, condition: Object) {
    const alias = this.buildIntoAlias(entity);
    const conditionKey = Object.keys(condition)[0].toLowerCase();
    return alias + "." + conditionKey + " = :" + conditionKey;
  }

  getEntityColumnNameList(entity: ObjectType<T>) {
    const columnMetadataList = dataSource.getMetadata(entity.name).columns;
    const columnNameList: string[] = Object.keys(
      columnMetadataList[0].entityMetadata.propertiesMap
    );
    return columnNameList;
  }
}
