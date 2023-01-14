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

import session from 'express-session'
import MongoStore from 'connect-mongo'
import flash from 'connect-flash'

app.use(urlencoded({ extended: true }))
app.use(express.static(resolve('.', 'public')))
app.use(example)
app.use(router)

const sessionOptions = session({
	secret: 'lfjasdfjhaslghs9685f8sd58f875sadfas907',
	store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7,
		httpOnly: true
	}
})

app.use(sessionOptions)
app.use(flash())

app.set('views', resolve('.', 'src', 'views'))
app.set('view engine', 'ejs')

app.on('dbconnected', () => {
	app.listen(3000, () => console.log('Server running on port http://localhost:3000'))
})
