import express from 'express'
import { addClass } from '../Controllers/classesController.js'

const classesRouter = express.Router()

classesRouter.post('/add-classes', addClass)

export default classesRouter