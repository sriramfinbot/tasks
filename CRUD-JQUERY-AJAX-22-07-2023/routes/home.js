const express = require("express");
const Router = express.Router();
const User = require("../models/users");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// for image
const formidable = require("formidable");

Router.get("/", (err, res) => {
    res.render("index")
})

// create / insert

Router.post("/addUser", (req, res) => {

    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }

        let oldPath = file.prodImage[0].filepath;
        let newPath = path.join("E:", "CRUD-JQUERY-AJAX-22-07-2023", "public", 'uploads') + '/' + Date.now() + "-" + file.prodImage[0].originalFilename;

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
        if (NCC.length == 0) {
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

})

// find data 

Router.get("/show", (req, res) => {
    User.find({}).then((docs) => {
        res.render("show", {
            students: docs
        })
    }).catch((err) => {
        console.log(err);
    })
})

// update data showing
Router.get("/edit/:id", (req, res) => {
    var params = req.params.id;
    var result = params.includes(".");
    if (result == true) {
        console.log("double the request");
        res.end();
    } else {
        console.log(req.params);
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((docs) => {
            res.render("edit", { studentData: docs })
            // console.log(docs)
            // res.send(docs);
        }).catch((err) => {
            console.log("can't update")
        })
    }

})

// for updating
Router.post("/edit/:id", (req, res) => {

    const form = new formidable.IncomingForm();
    form.options.allowEmptyFiles = true;
    form.options.minFileSize = 0;

    form.parse(req, (err, fields, file) => {
        var fileLength = Object.keys(file).length;
        var photo = "";

        var user = {};
        user.firstName = fields.firstName.toString();
        user.lastName = fields.lastName.toString();
        user.email = fields.email.toString();
        user.mob_no = fields.mob_no.toString();
        user.Post = fields.Post.toString();
        user.bld_group = fields.bld_group.toString();
        var NCC1 = fields.NCC.toString();
        var NCC = NCC1.split(",");
        if (NCC.length == 0) {
            user.NCC = ["NO"];
        } else {
            user.NCC = NCC
        }
        user.dateOfBirth = fields.dateOfBirth.toString();
        user.gender = fields.gender.toString();
        user.qualification = fields.qualification.toString();


        if (err) {
            console.log(err);
            return res.status(400).json({ error: err })
        }

        if (fileLength == 0) {
            User.findById({ _id: req.params.id }, req.body).then((docs) => {
                photo = docs.photo;
                user.photo = photo;

                User.findByIdAndUpdate({ _id: req.params.id }, user).then((docs) => {
                    res.redirect("/show")
                }).catch((err) => {
                    console.log("error", "image parsing error");
                    console.log(err);
                })

            }).catch((err) => {
                console.log("error in findById", err);
            })
        } else {

            User.findById({ _id: req.params.id }, req.body).then((docs) => {
                var oldImagePhoto = docs.photo;
                console.log(oldImagePhoto);
                var oldImagePath = path.join("E:", "CRUD-JQUERY-AJAX-22-07-2023", "public", 'uploads') + '/' + oldImagePhoto;
                fs.unlinkSync(oldImagePath);

                let oldPath = file.prodImage[0].filepath;
                let newPath = path.join("E:", "CRUD-JQUERY-AJAX-22-07-2023", "public", 'uploads') + '/' + Date.now() + "-" + file.prodImage[0].originalFilename;

                photo = Date.now() + "-" + file.prodImage[0].originalFilename;

                let rawData = fs.readFileSync(oldPath)
                fs.writeFile(newPath, rawData, function (err) {
                    if (err) {
                        console.log(err);
                    }
                })
                user.photo = photo;
                User.findByIdAndUpdate({ _id: req.params.id }, user).then((docs) => {
                    res.redirect("/show")
                }).catch((err) => {
                    console.log("error", "image parsing error");
                    console.log(err);
                })

            }).catch((err) => {
                console.log("error in findById delete", err);
            })
        }
    })

})

// delete data
Router.get("/delete/:id", (req, res) => {

    var params = req.params.id;
    var result = params.includes(".");
    if (result == true) {
        res.end();
    } else {

        User.findById({ _id: req.params.id }, req.body).then((docs) => {
            let pathForDelete = path.join("E:", "CRUD-JQUERY-AJAX-22-07-2023", "public", 'uploads') + '/' + docs.photo;
            fs.unlinkSync(pathForDelete);

        }).catch((err) => {
            console.log("error in findById delete", err);
        })

        User.findByIdAndDelete({ _id: req.params.id }, req.body).then((docs) => {
            res.redirect("/show")
        }).catch((err) => {
            console.log("error")
        })
    }
})

Router.get("/validateEmail/:email", (req, res) => {
    User.findOne({ email: req.params.email }).then((docs) => {
        if (docs == null) {
            res.send("Invalid")
        } else {
            res.send("Valid")
        }
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = Router;
