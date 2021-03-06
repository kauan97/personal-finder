module.exports = (req, res, next) => {
	res.success = (data, status) => {
		return res.status((status || 200)).send(data)
	}

	res.error = (message, status) => {
		// console.log(message)
		return res.status((status || 500)).send({ message })
	}

	return next()
}
