import express from "express";
import { UserController } from "../../controllers/user/index.ts";
import { UserService } from "../../services/UserService.ts";
import { InputValidation } from "../../middlewares/input_validation.ts";
import { UserRepository } from "../../repositories/user/index.ts";
import { dataSource } from "../../dataSource.ts";
import { CrudRepositoryHelpers } from "../../helpers/typeorm-querybuilder.ts";

const userRouter = express.Router();
const helpers = new CrudRepositoryHelpers();
const userRepository = new UserRepository(dataSource, helpers);
const userService = new UserService(userRepository);
const controller = new UserController(userService);

userRouter.post(
  "/register",
  InputValidation.validateDataInput,
  controller.register
);

export { userRouter };
