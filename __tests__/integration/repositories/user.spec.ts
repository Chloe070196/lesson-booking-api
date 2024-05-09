import "dotenv/config";
import { ObjectLiteral } from "typeorm";
import { expect, test } from "@jest/globals";
import { dataSource } from "../../../src/dataSource.ts";
import { CrudRepositoryHelpers } from "../../../src/helpers/typeorm-querybuilder.ts";
import { UserRepository } from "../../../src/repositories/user/index.ts";

describe("user repository methods: ", () => {
  const helpers = new CrudRepositoryHelpers();
  const repository = new UserRepository(dataSource, helpers);

  const mockUserOne = {
    username: "Max",
    password: process.env.TEST_USER_TWO_PASSWORD,
    email: process.env.TEST_USER_TWO_EMAIL,
  };

  // all we are concerned with here is to check that UserRepository
  // extends CrudRepository properly. The tests only ascertain that
  // the request goes through as expected.
  test("this.userRepository.create(value, entity) inserts a new instance of a user in the db and returns it", async () => {
    await dataSource.initialize();
    const result: ObjectLiteral = await repository.post(mockUserOne);
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result.identifiers[0]).toHaveProperty("id");
    expect(result.generatedMaps[0].username).toEqual("Max");
    // TODO: add a delete method so that this test can be run multiple times
    // without the repetition changing its outcome
  }, 20000);
  test("this.userRepository.read(condition, entity) returns the value of the user instance matching the condition passed to it", async() => {
    const result: void | ObjectLiteral = await repository.getUserBy({
      username: "Lee",
    });
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).toHaveProperty('username');
    expect((result as { username: string }).username).toEqual('Lee');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('createdAt');
    expect(result).toHaveProperty('updatedAt');
  });
});
