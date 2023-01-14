const hello = (req, res) => {
	res.render('index')
}

const registered = (req, res) => {
	res.send('Thanks for your message!')
}

export { hello, registered }
