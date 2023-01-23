require('dotenv').config()
// express
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5000

console.log(process.env.MONGO_URI);

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(PORT)
        console.log(`Server is listening on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
}

start()