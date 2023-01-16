export const hello = (req, res, next) => {
	res.render('index')
	next()
}
