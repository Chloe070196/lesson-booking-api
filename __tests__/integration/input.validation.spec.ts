import { expect, jest, test } from "@jest/globals";
import { InputValidation } from "../../src/middlewares/input_validation";

describe("input validation: ", () => {
  const inputValidation = new InputValidation();
  let req: any;
  let res: any;
  const next: any = jest.fn(); 

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(), 
      json: jest.fn(), 
    };
  });

  describe("validateDataInput should ", () => {
    test("send a 401 error message when the input is invalid", () => {
      req.body = {
        name: "joe",
        email: "", 
      };
      inputValidation.validateDataInput(req, res, next);  
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ status: "fail", message: "missing input email" });
    });

    test("call next() if the input is valid", () => {
      req.body = {
        name: "joe",
        email: "test@email.com",
      };
      inputValidation.validateDataInput(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
})
