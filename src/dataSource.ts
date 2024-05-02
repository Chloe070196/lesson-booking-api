import "reflect-metadata"
import { DataSource } from 'typeorm' 
import dotenv from 'dotenv'
import { User } from "./entities/user/index.ts"
import { TimeSlot } from "./entities/timeslot/index.ts"
import { Teacher } from "./entities/teacher/index.ts"
import { Student } from "./entities/student/index.ts"
import { Question } from "./entities/question/index.ts"
import { Qualification } from "./entities/qualification/index.ts"
import { Method } from "./entities/method/index.ts"
import { Location } from "./entities/location/index.ts"
import { Class } from "./entities/class/index.ts"
import { Lesson } from "./entities/lesson/index.ts"
import { Booking } from "./entities/booking/index.ts"
import { Answer } from "./entities/answer/index.ts"
dotenv.config()

const dataSource = new DataSource({
    type: "postgres",
    database: "lesson-booking",
    url: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    entities: [User],
    // entities: [User, TimeSlot, Teacher, Student, Question, Qualification, Method, Location, Lesson, Class, Booking, Answer],
    synchronize: true,
})

export { dataSource };