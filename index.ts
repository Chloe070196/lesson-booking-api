const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const cors = require('cors')
const { DataSource } = require("typeorm")
require('dotenv').config()

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

module.exports = {
    app, 
    dataSource
}