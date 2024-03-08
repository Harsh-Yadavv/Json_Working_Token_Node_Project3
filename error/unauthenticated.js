const customAPIError = require("./custom-error")

class unAuthenticatedError extends customAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 401
    }
}

module.exports = unAuthenticatedError