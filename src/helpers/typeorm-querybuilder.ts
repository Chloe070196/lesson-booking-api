import { EntityTarget } from "typeorm"

export class CrudRepositoryHelpers<T> {
    buildIntoAlias( entity: EntityTarget<T>) {  
        return entity.toString()
    }
    
    buildWhereConditionString(entity: EntityTarget<T>, condition: Object) {
        const alias = this.buildIntoAlias(entity)
        const conditionKey = Object.keys(condition)[0].toLowerCase()
        const conditionStr = alias + '.' + conditionKey + ' = :' + conditionKey
        return conditionStr
    }
}
