import express from "express";
import { InputValidation } from "../../middlewares/input_validation.ts";
import { TeacherController } from "../../controllers/teacher/index.ts";
import { dataSource } from "../../dataSource.ts";
import TeacherService from "../../services/teacher/index.ts";
import TeacherRepository from "../../repositories/teacher/index.ts";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder.ts";

const teacherRouter = express.Router();
const helpers = new CrudRepositoryHelpers();
const teacherRepository = new TeacherRepository(dataSource, helpers);
const teacherService = new TeacherService(teacherRepository);
const controller = new TeacherController(teacherService);

teacherRouter.put(
  "/update",
  InputValidation.validateDataInput
);


export { teacherRouter };
