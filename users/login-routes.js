import express from 'express'
import authenticate from './services/authenticate'

const router = express.Router()

router.post('/', authenticate)


export default router