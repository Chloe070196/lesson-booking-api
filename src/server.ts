import express, { Request, Response } from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";

app.use(morgan("dev"));
app.use(cors());

//TODO: add routes here

// deals with any attempt to access an non-existent route
app.get("/*", (req: Request, res: Response) => {
  res.status(404).json({ status: "fail", message: "not found" });
});

export { app };
