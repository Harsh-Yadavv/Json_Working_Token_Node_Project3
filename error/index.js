const customAPIError = require('./custom-error')
const badRequest = require('./bad-request')
const unAuthenticatedError = require('./unauthenticated')

module.exports = {
    customAPIError,
    badRequest,
    unAuthenticatedError
}