const hello = (req, res, next) => {
	res.render('index')
	next()
}

const registered = (req, res) => {
	res.send('Thanks for your message!')
}

export { hello, registered }
