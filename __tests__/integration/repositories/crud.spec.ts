import "dotenv/config";
import { ObjectLiteral } from "typeorm";
import { expect, test } from "@jest/globals";
import { CrudRepository } from "../../../src/repositories/crud-repository/index.ts";
import { dataSource } from "../../../src/dataSource.ts";
import { CrudRepositoryHelpers } from "../../../src/helpers/typeorm-querybuilder.ts";

describe("crud repository methods: ", () => {
  const helpers = new CrudRepositoryHelpers();
  const repository = new CrudRepository(dataSource, helpers);

  const mockUserOne = {
    username: "Lee",
    password: process.env.TEST_USER_ONE_PASSWORD,
    email: process.env.TEST_USER_ONE_EMAIL,
  };

  // since the error handling does not happen at the repository level
  // this integration test is only testing one 'happy path' 
  // if there is an issue with a query
  // this will allow to quickly ensure that the CRUD methods themselves
  // are not at fault
  describe("this.crudRepository.create(value, entity) inserts a new user in the database and returns only a user's id and username", () => {
    test("", async () => {
      await dataSource.initialize()
      const result: ObjectLiteral = await repository.create(
        mockUserOne,
        "User"
      );
      console.log(result)
      expect(result).not.toBeNull();
      expect(result).not.toBeUndefined();
      expect(result.identifiers[0]).toHaveProperty("id");
      expect(result.raw[0]).not.toHaveProperty("email");
      expect(result.raw[0]).not.toHaveProperty("password");
      expect(result.raw[0]).toHaveProperty("username");
      expect(result.generatedMaps[0]).not.toHaveProperty("email");
      expect(result.generatedMaps[0]).not.toHaveProperty("password");
      expect(result.generatedMaps[0]).toHaveProperty("username");
      expect(result.generatedMaps[0].username).toEqual("Lee");
      // TODO: add a delete method so that this test can be run multiple times
      // without the repetition changing its outcome
    }, 20000);
  });
});
