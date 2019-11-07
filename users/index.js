import express from 'express'
import list from './services/list'
import filter from './services/filter'
import find from './services/find'
import create from './services/create'
import update from './services/update'
import remove from './services/remove'
import me from '../users/services/me'
import authenticate from './services/authenticate'

const router = express.Router()

router.get('/', list)
router.get('/filter', filter)
router.get('/user/:id', find)
router.get('/me', me)
router.post('/', create)
router.post('/login', authenticate)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router