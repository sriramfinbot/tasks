const express = require("express");
const Router = express.Router();
const User = require("../models/student");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const formidable = require("formidable");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Router.post("/")

Router.get("/", (err, res) => {
    // res.sendFile(path.join(__dirname, 'public/index.html'));
    res.send("Please got to localhost:8081/index.html");
})

Router.post("/addData", (req, res) => {
    const user = new User(req.body);
    console.log(req.body)
    user.save().then(() => {
        console.log('Data saved to mongodb successfully');
    }).catch((err) => {
        console.log(err);
        console.log("error happened")
    })
})

Router.post("/addImage", (req, res) => {
    var image = "";

    const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, file) => {
            if (err) {
                return res.status(400).json({ error: err })
            }

            let oldPath = file.prodImage[0].filepath;
            let newPath = path.join("E:", "CRUD-JQUREY-AJAX-19-07-2023", "public", 'uploads') + '/' + Date.now() + "-" + file.prodImage[0].originalFilename;

            image = Date.now() + "-" + file.prodImage[0].originalFilename;

            let rawData = fs.readFileSync(oldPath)
            fs.writeFile(newPath, rawData, function (err) {
                if (err) {
                    console.log(err);
                }
            })
            return image;
        })

});
module.exports = Router;