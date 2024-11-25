import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloundinary.js'
import instructorRouter from './Routes/instructorRouter.js'
import classesRouter from './Routes/classesRouter.js'


//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


{/*api endpoints*/}

//agregar instructor
//localhost:4000/api/instructor/add-instructor
app.use('/api/instructor',instructorRouter)

//Agregar una clase 
//localhost:4000/api/classes/add-classes
app.use('/api/classes',classesRouter)

app.get('/',(req, res)=>(
    res.send('Holaaa')
))

app.listen(port, ()=> console.log("server", port))