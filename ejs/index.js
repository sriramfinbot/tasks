var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var expressLayouts = require("express-ejs-layouts");

var app = express();

app.use(bodyParser());
app.use(cors());
app.use(expressLayouts);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {
       people: [
        { name:  "dave"},
        { name: "jerry"}
       ]
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => { 
    console.log("server is running on port 3000");
})
