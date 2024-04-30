import { expect, jest, test } from "@jest/globals";
import { InputValidation } from "../../src/middlewares/input_validation";

describe("input validation: ", () => {

  describe("validateInputField should return", () => {
    test(" false when the value is an empty string", () => {
      const result = InputValidation.validateInputField("");
      expect(result).toEqual(false);
    });
    test(" false when the value is null or undefined", () => {
      const result = InputValidation.validateInputField(undefined);
      expect(result).toEqual(false);
    });
    test(" true when the value is null or undefined", () => {
      const result = InputValidation.validateInputField("some string");
      expect(result).toEqual(true);
    });
  });
  describe("findInvalidField should return", () => {
    test(" the first invalid field it finds", () => {
      const result = InputValidation.findInvalidField({
        name: "joe",
        email: undefined,
      });
      expect(result).toEqual("email");
    });
    test(" undefined when all fields are valid", () => {
      const result = InputValidation.findInvalidField({
        name: "joe",
        email: "test@email.com",
      });
      expect(result).toEqual(undefined);
    });
  });
});
