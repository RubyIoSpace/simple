import 'dotenv/config'
import express from 'express'
import { config } from './config'
import userRouter from './user/route'

const app = express()

app.use(express.json())

app.use('/api/user', userRouter)

app.listen(config.port, () => `Server running on port ${config.port}`)
