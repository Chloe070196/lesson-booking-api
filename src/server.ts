import express, { Request, Response } from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export { app };
