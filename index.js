import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

let db = mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true })

routes(app)

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
})