const newUser = (req, res) => {
	console.log(req.body)
	res.send('Successfully registered user!')
}

export { newUser }
