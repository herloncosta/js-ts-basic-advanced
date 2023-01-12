import express, { urlencoded } from 'express'
import { router } from './routes.js'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(router)

app.listen(3000, () => console.log('Server running on port 3000'))
