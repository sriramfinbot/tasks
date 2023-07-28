const express = require("express");
const Router = express.Router();
const User = require("../models/student");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const formidable = require("formidable");

var urlencodedParser = bodyParser.urlencoded({ extended: false })


Router.get("/", (err, res) => {
    res.send("Please got to localhost:8081/index.html");
})

Router.post("/addImage", (req, res) => {
    var image = "";
    // console.log(req);
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

        var user = {};
        user.firstName = fields.firstName.toString();
        user.lastName = fields.lastName.toString();
        user.email = fields.email.toString();
        user.mob_no = fields.mob_no.toString();
        user.Post = fields.Post.toString();
        user.bld_group = fields.bld_group.toString();
        var NCC1 = fields.NCC.toString();
        var NCC = NCC1.split(",");
        if(NCC.length == 0) {
            user.NCC = ["NO"];
        } else {
            user.NCC = NCC
        }
        user.dateOfBirth = fields.dateOfBirth.toString();
        user.gender = fields.gender.toString();
        user.qualification = fields.qualification.toString();
        user.photo = image;


        const userD = new User(user);
        userD.save().then(() => {
            console.log('Data saved to mongodb successfully');
            res.send("Data saved on mongodb successfully");
        }).catch((err) => {
            console.log(err);
            console.log("error happened")
        })
    })
});


Router.get("/showData", (req, res) => {
        User.find({}).then((docs) => {
            res.send(docs);
            console.log(docs);
        }).catch((err) => {
            console.log(err);
            console.log("error happened");
        })
});
module.exports = Router;