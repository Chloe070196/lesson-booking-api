import { DataSource } from "typeorm";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder";
import { Teacher } from "../../entities/teacher";
import { CrudRepository } from "../crud-repository";

export default class TeacherRepository extends CrudRepository<Teacher> {
  constructor(dataSource: DataSource, helpers: CrudRepositoryHelpers<Teacher>) {
    super(dataSource, helpers);
  }
}
