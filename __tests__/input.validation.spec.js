import { expect, test } from "@jest/globals";
import { InputValidation } from "../src/middlewares/input_validation";

describe("input validation: ", () => {
  const inputValidation = new InputValidation();

  describe("validateInputField should return", () => {
    test(" false when the value is an empty string", () => {
      const result = inputValidation.validateInputField("");
      expect(result).toEqual(false);
    });
    test(" false when the value is null or undefined", () => {
      const result = inputValidation.validateInputField(undefined);
      expect(result).toEqual(false);
    });
    test(" true when the value is null or undefined", () => {
      const result = inputValidation.validateInputField("some string");
      expect(result).toEqual(true);
    });
  });
  describe("findInvalidField should return", () => {
    test(" the first invalid field it finds", () => {
      const result = inputValidation.findInvalidField({
        name: "joe",
        email: undefined,
      });
      expect(result).toEqual("email");
    });
    test(" undefined when all fields are valid", () => {
      const result = inputValidation.findInvalidField({
        name: "joe",
        email: "test@email.com",
      });
      expect(result).toEqual(undefined);
    });
  });
});
