import { NextFunction, Request, Response } from "express";
import { sendMessageResponse } from "../utils/responses";

export class InputValidation {
  validateInputField(dataFieldValue: string | null) {
    return !!(dataFieldValue && dataFieldValue !== "");
  }

  findInvalidField(requestBody: object) {
    const dataFieldNameArr = Object.keys(requestBody);
    let searchResult = undefined
    dataFieldNameArr.forEach((dataFieldName) => {
      if (!this.validateInputField(requestBody[dataFieldName])) {
        searchResult = dataFieldName;
      }
    });
    return searchResult;
  }

  validateDataInput(req: Request, res: Response, next: NextFunction) {
    const invalidDataFieldName = this.findInvalidField(req.body);
    if (invalidDataFieldName) {
      sendMessageResponse(res, 401, `missing input ${invalidDataFieldName}`);
    }
    next();
  }
}
