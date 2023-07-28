const mongoose = require("mongoose");


const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log(error);
    }) 
}

module.exports = connectDB;