import { DataSource } from 'typeorm' 
import dotenv from 'dotenv'
dotenv.config()

const dataSource = new DataSource({
    type: "postgres",
    database: "lesson-booking",
    url: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD
})

export { dataSource };