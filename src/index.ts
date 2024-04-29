import { dataSource } from './dataSource.js'
import { app } from './server.js';
import dotenv from 'dotenv'
dotenv.config()

const port = 3000;

dataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!")
})
.catch((err: Error) => {
  console.error("Error during Data Source initialization", err)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app }
