import express, { Request, Response } from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import { userRouter } from "./routes/user/index.ts";
import { docsRouter } from "./routes/api-docs/index.ts";

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

//TODO: add routes here
app.use('/api-docs', docsRouter)
app.use('/user', userRouter)

// deals with any attempt to access an non-existent route
app.get("/*", (req: Request, res: Response) => {
  res.status(404).json({ status: "fail", message: "not found" });
});

export { app };
