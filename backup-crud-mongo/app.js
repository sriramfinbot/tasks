const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");

const app = express();
const port = process.env.port || 8080;

    mongoose.connect("mongodb://127.0.0.1:27017/userDetails").then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log(error);
    }) 

app.set('view engine', 'ejs');


// body parser
app.use(bodyParser.urlencoded({ extended: false}));

// parse  application/json
app.use(bodyParser.json());

app.use("/", homeRoutes);
app.use(express.static('public'));


app.listen(port, () => {
    console.log("server is running on " + port);
})