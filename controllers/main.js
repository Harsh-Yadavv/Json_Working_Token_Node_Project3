
const {badRequest} = require('../error/index')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {username,password} = req.body

    //mongoose validation
    //Joi package
    //error response after check in controller
    if (!username || !password) {
        throw new badRequest('Please provide email and password')
    }
    //just for demo, normally provided by DB
    const id = new Date().getDate()

    //try to keep payload small, better UX
    const token = jwt.sign({ id, username }, `$(process.env.JWT_SECRET)`, { expiresIn: '1h'});

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})

}

module.exports = {login, dashboard}