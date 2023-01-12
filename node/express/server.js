import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello Express')
})

app.get('/contato', (req, res) => {
	res.send(`
	<form method="post" action="/">
		Name: <input type="text" name="username" placeholder="Insira seu nome aqui" />
		<button>Enviar</button>
	</form>
	`)
})

app.post('/', (req, res) => {
	res.send('Thanks for your message!')
})

app.listen(3000, () => console.log('Server running on port 3000'))
