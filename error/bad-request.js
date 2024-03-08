const customAPIError = require("./custom-error")

class badRequest extends customAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 400
    }
}

module.exports = badRequest