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

Router.post("/add", (req, res) => {

    // for image
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }

        let oldPath = file.photo[0].filepath;
        let newPath = path.join("E:", "CRUD-MONGO-11-07-2023", "public", 'uploads') + '/' + Date.now() + "-" + file.photo[0].originalFilename;

        photo = Date.now() + "-" + file.photo[0].originalFilename;

        let rawData = fs.readFileSync(oldPath)
        fs.writeFile(newPath, rawData, function (err) {
            if (err) {
                console.log(err);
            }
        })

        firstName = fields.firstName;
        firstName = firstName.toString();
        lastName = fields.lastName;
        lastName = lastName.toString();
        email = fields.email;
        email = email.toString();
        mob_no = fields.mob_no;
        mob_no = mob_no.toString();

        var data = fs.readFileSync(file.photo[0].filepath);
        contentType = file.photo[0].mimetype;
        const user = new User({ firstName, lastName, email, mob_no });
        user.photo = photo;


        user.save().then(() => {
            console.log('Data saved to mongodb successfully');
            res.redirect("/")
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
    // console.log(req.params.id);
    // console.log(req.params.id);
    // console.log(req.originalUrl);
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((docs) => {
        res.render("edit", { studentData: docs })
    }).catch((err) => {
        // console.log(err);
        console.log("can't update")
    })
})

// for updating
Router.post("/edit/:id", (req, res) => {

    console.log(req.body);

    const form = new formidable.IncomingForm();
    form.options.allowEmptyFiles = true;

    form.parse(req, (err, fields, file) => {

        if (err) {
            console.log(err);
            return res.status(400).json({ error: err })
        }

        let photo = "";

        if (Object.keys(file).length == 0) {
            User.findById({ _id: req.params.id }, req.body).then((docs) => {
                // console.log(docs.photo)
                photo = docs.photo
            }).catch((err) => {
                console.log("error in findById delete", err);
            })
        } else {
            let oldPath = file.photo[0].filepath;
            let newPath = path.join("E:", "CRUD-MONGO-11-07-2023", "public", 'uploads') + '/' + Date.now() + "-" + file.photo[0].originalFilename;

            photo = Date.now() + "-" + file.photo[0].originalFilename;
            // console.log(photo);

            let rawData = fs.readFileSync(oldPath)
            fs.writeFile(newPath, rawData, function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }



        firstName = fields.firstName;
        firstName = firstName.toString();
        lastName = fields.lastName;
        lastName = lastName.toString();
        email = fields.email;
        email = email.toString();
        mob_no = fields.mob_no;
        mob_no = mob_no.toString();

        var user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.mob_no = mob_no;
        user.photo = photo;

        User.findByIdAndUpdate({ _id: req.params.id }, user).then((docs) => {
            res.redirect("/show")
        }).catch((err) => {
            console.log("error");
            // console.log(err);
        })

    })


})

// delete data
Router.get("/delete/:id", (req, res) => {

    User.findById({ _id: req.params.id }, req.body).then((docs) => {
        console.log(docs.photo);
        let pathForDelete = path.join("E:", "CRUD-MONGO-11-07-2023", "public", 'uploads') + '/' + docs.photo;
        fs.unlinkSync(pathForDelete);

    }).catch((err) => {
        console.log("error in findById delete", err);
    })


    User.findByIdAndDelete({ _id: req.params.id }, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })

})

module.exports = Router;
