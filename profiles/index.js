import express from 'express'
import list from './services/list'
import create from './services/create'
import me from '../users/services/me'
import remove from './services/remove'

const router = express.Router()

router.get('/', list)
router.get('/me', me)
router.post('/', create)
router.delete('/:id', remove)

export default router