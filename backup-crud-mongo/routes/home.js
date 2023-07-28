const express = require("express");
const Router = express.Router();
const User = require("../models/users");
const path = require("path");
const fs = require("fs");

// for image
const formidable = require("formidable");

Router.get("/", (err, res) => {
    res.render("index")
})

// create / insert

Router.post("/add", (req, res) => {

    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const mob_no = req.body.mob_no;
    // const photo = req.body.photo;

    // for image
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        // console.log(file);
        // console.log(file.photo);
        // console.log(fields);

        const user = new User(fields);
        if(file.photo) {
            // console.log(file.photo[0].filepath);
            // console.log(file.photo.filepath);
            // console.log(file.photo.mimetype);

            // user.photo.data = fs.readFileSync(file.photo.filepath);
            // var oldpath = file.photo.filepath;
            // var newpath = path.join(__dirname, "uploads") + '/' + file.photo.originalFilename;
            // var rawData = fs.readFileSync(oldpath);
            // console.log(user.photo.data);
            // user.photo.data = fs.readFileSync(file.photo.filepath);
            // user.photo.contentType = file.photo.mimetype;
            
            // fs.writeFile(newpath, rawData, (err) => {
            //     if(err) { console.log(err);}
            //     console.log("successfully uploaded");
            // })

            user.photo.data = fs.readFileSync(file.photo[0].filepath);
            user.photo.contentType = file.photo[0].mimetype;
            console.log(user);
            console.log(user.photo);
        }
        user.save().then(() => {
            console.log('image upload success');
            res.redirect("/")
        }).catch((err) => {
            // console.log(err);
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
    User.findOneAndUpdate({_id: req.params.id}, req.body,{new:true}).then((docs) => {
        res.render("edit", {studentData: docs})
    }).catch((err) => {
        console.log("can't update")
    })
})

// for updating
Router.post("/edit/:id", (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error");
        console.log(err);
    })
})
// Router.post("/edit/:id", (req, res) => {
//     User.findByIdAndUpdate(req.params.id).then((docs) => {
//         res.redirect("/show")
//     }).catch((err) => {
//         console.log("error");
//         console.log(err);
//     })
// })

// delete data
Router.get("/delete/:id", (req, res) => {
    User.findByIdAndDelete({_id: req.params.id}, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})

module.exports = Router;
