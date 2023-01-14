import express, { urlencoded } from 'express'
import { router } from './src/routes.js'
import { resolve } from 'node:path'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(express.static(resolve('.', 'public')))
app.use(router)

app.set('views', resolve('.', 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => console.log('Server running on port 3000'))
