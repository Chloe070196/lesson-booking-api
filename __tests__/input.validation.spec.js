import { expect, test } from "@jest/globals";
import { InputValidation } from "../src/middlewares/input_validation";

describe("input validation: ", () => {
  const inputValidation = new InputValidation();

  describe("validateInputFiled should return", () => {
    test(" false when the value is an empty string: ", () => {
        const result = inputValidation.validateInputField("") 
        expect(result).toEqual(false);
    });
    test("validateInputFiled should return false when the value is null or undefined: ", () => {
        const result = inputValidation.validateInputField(undefined) 
        expect(result).toEqual(false);
    });
    test("validateInputFiled should return true when the value is null or undefined: ", () => {
        const result = inputValidation.validateInputField("some string") 
        expect(result).toEqual(true);
    });
  });
});
