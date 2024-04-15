import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { dataSource } from './src/utils/dataSource.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(cors());

dataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!")
})
.catch((err: Error) => {
  console.error("Error during Data Source initialization", err)
})

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app }
