const contact = (req, res) => {
	res.send(`
	<form method="post" action="/newuser">
		Name: <input type="text" name="name" placeholder="your name here" /><br />
		Surname: <input type="text" name="surname" placeholder="your last name here" />
		<button>Register</button>
	</form>
	`)
}

export { contact }
