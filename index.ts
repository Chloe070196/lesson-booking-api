import express, { Request, Response } from "express"
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()
const port = 3000
const { DataSource } = require("typeorm")
dotenv.config()

app.use(morgan("dev"))
app.use(cors())

const dataSource = new DataSource({
    type: "postgres",
    database: "lesson-booking",
    url: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER, 
    password: process.env.POSTGRES_PASSWORD
})

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: Error) => {
        console.error("Error during Data Source initialization", err)
    })

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

module.exports = {
    app, 
    dataSource
}