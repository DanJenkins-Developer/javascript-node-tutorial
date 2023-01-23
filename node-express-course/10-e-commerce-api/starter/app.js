// environment variables 
require('dotenv').config()
// express
const express = require('express')
const app = express()
// database
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    
})

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