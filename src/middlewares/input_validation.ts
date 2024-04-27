import { NextFunction, Request, Response } from "express";
import { sendMessageResponse } from "../utils/responses";

export class InputValidation {
  validateInputField(dataFieldValue: string | null) {
    return !!(dataFieldValue && dataFieldValue !== "");
  }

  findInvalidField(requestBody: object) {
    const dataFieldNameArr = Object.keys(requestBody);
    dataFieldNameArr.forEach((dataFieldName) => {
      if (!this.validateInputField(dataFieldName)) {
        return dataFieldName;
      }
    });
    return undefined;
  }

  validateDataInput(req: Request, res: Response, next: NextFunction) {
    const invalidDataFieldName = this.findInvalidField(req.body);
    if (invalidDataFieldName) {
      sendMessageResponse(res, 401, `missing input ${invalidDataFieldName}`);
    }
    next();
  }
}
