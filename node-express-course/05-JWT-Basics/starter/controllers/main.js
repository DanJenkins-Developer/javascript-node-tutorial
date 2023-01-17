

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body

    // mongoose validation
    // Joi
    // Check in controller

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    // just for demo
    const id = new Date().getDate()

    // try to keep payload small
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'user created', token })

    // console.log(username, password);
    // res.send('Fake Login/Register/Signup route')
}

const dashboard = async (req, res) => {
    // const authHeader = req.headers.authorization
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     throw new CustomAPIError('No token provided', 401)
    // }
    // const token = authHeader.split(' ')[1]


    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //     const luckNumber = Math.floor(Math.random() * 100)
    //     res.status(200).json({ msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckNumber}` })

    //     //console.log(decoded);
    // } catch (error) {
    //     throw new CustomAPIError('Not authorized to access this route', 401)
    // }

    //console.log(token);
    console.log(req.user);

    const luckNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckNumber}` })

}

module.exports = {
    login, dashboard
}