
const { errors } = require('celebrate')

module.exports = app => {
	app.get('/api', (req, res) => {
		res.status(200).send({ message: 'Welcome to Personal Finder API!' })
	})
	
	// Pretty validation errors
	app.use(errors())

	// Handling not found routes
	app.use((req, res, next) => {
		const errorMessage = 'Oops! Página não encontrada.'

		if (req.accepts('json')) {
			res.status(404).send({ message: errorMessage })
			return
		}
		res.status(404).type('txt').send(errorMessage)
	})
}
