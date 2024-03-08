const jwt = require('jsonwebtoken')
const {unAuthenticatedError} = require('../error/index')


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authentication;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new unAuthenticatedError('No token provided, Authentication error')
    }
    const token = authHeader.split(' ')[1]  //second value after splitting the authHeader containing bearer and token
    try {
        const decoded = jwt.verify(token, `$(process.env.JWT_SECRET)`)
        const {id, username} = decoded
        req.user = {id, username}   
        next()
    } catch (error) {
        throw new unAuthenticatedError('Not authorised to access this route')
    }
}

module.exports = authenticationMiddleware