const mongoose = require('mongoose')


//const connectionString = "mongodb+srv://root:eBqYmkg3HodAAif@simplkitchen.zcyjgw3.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

}

module.exports = connectDB