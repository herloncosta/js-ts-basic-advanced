const userProfile = (req, res) => {
	res.send(req.params.id)
}

export { userProfile }
