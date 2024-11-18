import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloundinary.js'
import instructorRouter from './Routes/instructorRouter.js'


//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


{/*api endpoints*/}

app.use('/api/instructor',instructorRouter)
//localhost:4000/api/instructor/add-instructor

app.get('/',(req, res)=>(
    res.send('Holaaa')
))

app.listen(port, ()=> console.log("server", port))