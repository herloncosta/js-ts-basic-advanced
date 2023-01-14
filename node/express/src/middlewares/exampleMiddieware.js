export const example = (req, res, next) => {
	console.log('entrei no middleware')
	next()
}
