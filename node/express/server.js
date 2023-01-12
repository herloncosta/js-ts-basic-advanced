import express, { urlencoded } from 'express'

const app = express()

app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello Express')
})

app.get('/contact', (req, res) => {
	res.send(`
	<form method="post" action="/newuser">
		Name: <input type="text" name="name" placeholder="your name here" /><br />
		Surname: <input type="text" name="surname" placeholder="your last name here" />
		<button>Register</button>
	</form>
	`)
})

app.post('/', (req, res) => {
	res.send('Thanks for your message!')
})

// req.params
app.get('/profile/:id?', (req, res) => {
	res.send(req.params.id)
})

// req.query
app.get('/user', (req, res) => {
	const { name, lastname, age } = req.query
	if (name && lastname && age) {
		const data = `${name} ${lastname} ${age}`
		res.send(data)
	}
})

// req.body
app.post('/newuser', (req, res) => {
	console.log(req.body)
	res.send('Successfully registered user!')
})

app.listen(3000, () => console.log('Server running on port 3000'))
