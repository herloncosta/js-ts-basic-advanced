import { Router } from 'express'
import { hello, registered } from '../controllers/homeController.js'
import { contact } from '../controllers/contactController.js'
import { userProfile } from '../controllers/profileController.js'
import { user } from '../controllers/userController.js'
import { newUser } from '../controllers/newuserController.js'

const router = Router()

router.get('/', hello)
router.get('/contact', contact)
router.post('/', registered)

// req.params
router.get('/profile/:id?', userProfile)

// req.query
router.get('/user', user)

// req.body
router.post('/newuser', newUser)

export { router }
