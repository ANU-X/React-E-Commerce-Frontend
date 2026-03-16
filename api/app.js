import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import ConnectDB from './config/connectDB.js'
import userRouter from './routers/user.router.js'
import cookieParser from 'cookie-parser'

env.config()

const app = express()

// frontend to backend
app.use(cors())
app.use(cookieParser());
// { credentials: true, origin: process.env.FRONTEND_URL }
app.use(express.json())

app.get('/', (req, res)=>{res.send('this server is connect postman')})
app.use('/api/user', userRouter)
app.use('/api/user', userRouter)
app.use('/api/user/', userRouter)

// connection database(mongodb)
ConnectDB()

// port to server run
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server start successful...${PORT}`)
} )


// admin:9aR571020 database pasword.
