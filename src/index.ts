import { Request, Response } from 'express';
import { dataSource } from './dataSource.ts'
import { app } from './server.ts';

// allows for .env variables to be used througout the app.
import dotenv from 'dotenv'
dotenv.config()

// enable swagger UI at <host>:<port>/api-docs
import { docsRouter } from "./routes/api-docs/index.ts";
app.use('/api-docs', docsRouter)


// enable typeOrm dataSource
dataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!")
})
.catch((err: Error) => {
  console.error("Error during Data Source initialization", err)
})

// set up the server to list for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// deals with any attempt to access an non-existent route
app.get("/*", (req: Request, res: Response) => {
  res.status(404).json({ status: "fail", message: "not found" });
});

export { app }
