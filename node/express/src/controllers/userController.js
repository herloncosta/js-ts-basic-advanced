const user = (req, res) => {
	const { name, lastname, age } = req.query
	if (name && lastname && age) {
		const data = `${name} ${lastname} ${age}`
		res.send(data)
	}
}

export { user }
