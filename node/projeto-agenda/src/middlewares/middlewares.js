export const middlewareGlobal = (req, res, next) => {
	res.locals.variavelLocal = 'valor compartilhado com todos'
	next()
}

// eslint-disable-next-line no-unused-vars
export const checkCsrfError = (err, req, res, next) => {
	if (err && 'EBADCSRFTOKEN' === err.code) {
		return res.render('404')
	}
}

export const csrfMiddleware = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken()
	next()
}
