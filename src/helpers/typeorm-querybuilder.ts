import { EntityTarget } from "typeorm";
import { isNotStringType } from "../utils/checkDataType.ts";
import { dataSource } from "../dataSource.ts";

export class CrudRepositoryHelpers<T> {
  buildIntoAlias(entity: EntityTarget<T>) {
    if (isNotStringType(entity)) {
      return entity.name.toLowerCase();
    }
    throw new Error("error building alias - incorrect type");
  }

  buildWhereConditionString(entity: EntityTarget<T>, condition: Object) {
    const alias = this.buildIntoAlias(entity);
    const conditionKey = Object.keys(condition)[0].toLowerCase();
    return alias + "." + conditionKey + " = :" + conditionKey;
  }

  getEntityColumnNameList(entity: EntityTarget<T>) {
    if (isNotStringType(entity)) {
      const columnMetadataList = dataSource.getMetadata(entity.name).columns
      const columnNameList: string[] = Object.keys(columnMetadataList[0].entityMetadata.propertiesMap)    
      return columnNameList
    } 
  }

}
