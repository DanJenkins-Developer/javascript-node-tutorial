// environment variables 
require('dotenv').config()

// async errors package
require('express-async-errors')     // Used so we don't have to put try/catch blocks in each of our controllers

// express
const express = require('express')
const app = express()

// More packages
const morgan = require('morgan')

// database
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5000

// middleware imports
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// Global middleware. These get hit before the routes
app.use(morgan('tiny'))     // Logging data/Debugging
app.use(express.json())     // Grants access to JSON data in req.body


// routes
app.get('/', (req, res) => {
    res.send('E-Commerce API')
})

// error middleware
app.use(notFoundMiddleware)     // Middleware gets hit if no routes are found. Invoked outside of the routes.
app.use(errorHandlerMiddleware) // Middleware gets hit if there is an error inside a route. Invoked inside the routes. 


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT)
        console.log(`Server is listening on port ${PORT}...`);
    } catch (error) {
        console.log(error);
    }
}

start()