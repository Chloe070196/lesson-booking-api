import { NextFunction, Request, Response } from "express";
import { sendMessageResponse } from "../utils/responses.ts";

export class InputValidation {
  static validateInputField(dataFieldValue: string | null) {
    return !!(dataFieldValue && dataFieldValue !== "");
  }

  static findInvalidField(requestBody: object) {
    const dataFieldNameArr = Object.keys(requestBody);
    let searchResult = undefined
    dataFieldNameArr.forEach((dataFieldName) => {
      if (!InputValidation.validateInputField(requestBody[dataFieldName])) {
        searchResult = dataFieldName;
      }
    });
    return searchResult;
  }

  static validateDataInput(req: Request, res: Response, next: NextFunction) {
    const invalidDataFieldName = InputValidation.findInvalidField(req.body);
    if (invalidDataFieldName) {
      sendMessageResponse(res, 401, `missing input ${invalidDataFieldName}`);
    }
    next();
  }
}
