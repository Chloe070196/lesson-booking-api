import { EntityTarget, ObjectType } from "typeorm";

function isNotStringType<Entity>(
  entity: EntityTarget<Entity>
): entity is ObjectType<Entity> {
  return typeof entity !== "string";
}

export { isNotStringType };
