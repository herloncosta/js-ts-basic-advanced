import { Router } from 'express'
import { hello } from './controllers/homeController.js'
import { contact } from './controllers/contactController.js'

const router = Router()

router.get('/', hello)
router.get('/contact', contact)

export { router }
