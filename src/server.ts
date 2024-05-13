import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import { userRouter } from "./routes/user/index.ts";

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

app.use('/user', userRouter)

export { app };
