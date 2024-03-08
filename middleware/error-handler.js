

const {customAPIError} = require('../error/index')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send('something went wrong, try again later')
}

module.exports = errorHandlerMiddleware