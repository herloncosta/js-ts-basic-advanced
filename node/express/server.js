import dotenv from 'dotenv'
import express, { urlencoded } from 'express'
import { resolve } from 'node:path'
import { connect, set } from 'mongoose'
import { router } from './src/routes.js'
import { example } from './src/middlewares/exampleMiddieware.js'

dotenv.config()
const app = express()

set('strictQuery', false)

connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected database.')
		app.emit('dbconnected')
	})
	.catch(e => console.error(e))

app.use(urlencoded({ extended: true }))
app.use(express.static(resolve('.', 'public')))
app.use(router)
app.use(example)

app.set('views', resolve('.', 'src', 'views'))
app.set('view engine', 'ejs')

app.on('dbconnected', () => {
	app.listen(3000, () => console.log('Server running on port http://localhost:3000'))
})
