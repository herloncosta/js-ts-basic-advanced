import express, { urlencoded } from 'express'
import { router } from './src/routes.js'
import { resolve } from 'node:path'
import { example } from './src/middlewares/exampleMiddieware.js'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(express.static(resolve('.', 'public')))
app.use(router)
app.use(example)

app.set('views', resolve('.', 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => console.log('Server running on port 3000'))
