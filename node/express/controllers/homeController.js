const hello = (req, res) => {
	res.send('Hello Express')
}

const registered = (req, res) => {
	res.send('Thanks for your message!')
}

export { hello, registered }
