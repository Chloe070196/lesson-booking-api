import { Response } from "express";

const STATUS_MESSAGES_MAP = {
  "200": "success",
  "201": "success",
  "400": "fail",
  "401": "fail",
  "403": "fail",
  "404": "fail",
  "500": "error",
};
export function sendDataResponse(
  res: Response,
  statusCode: number,
  payload: Object
) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES_MAP[statusCode],
    data: payload,
  });
}
export function sendMessageResponse(
  res: Response,
  statusCode: number,
  message: string
) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES_MAP[statusCode],
    message,
  });
}
