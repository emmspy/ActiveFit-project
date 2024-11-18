import express from 'express'
import { addInstructor } from '../Controllers/instructorController.js'
import upload from '../Middlewares/multer.js'

const instructorRouter = express.Router()

instructorRouter.post('/add-instructor', upload.single('image'), addInstructor)

export default instructorRouter