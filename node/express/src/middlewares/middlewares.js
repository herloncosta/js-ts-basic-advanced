export const middlewareGlobal = (req, res, next) => {
	res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
	next()
}

export const checkCsrfError = (err, req, res, next) => {
	if (err && 'EBADCSRFTOKEN' === err.code) {
		return res.render('404')
	}
}

export const csrfMiddleware = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken()
	next()
}
