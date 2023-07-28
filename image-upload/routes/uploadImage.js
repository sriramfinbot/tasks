const express = require("express");
var router = express.Router();
const formidable = require("formidable");
const path = require("path");
// var file_path = '';


router.post('/', function(req, res) {

    var form = new formidable.IncomingForm();
    // var data = {};
    form.uploadDir = "/public/uploads";
    form.keepExtension = true;
    form.multiples = true;
    form.parse(request, (err, fields, files) => {
        if(err) {
            response.json({
                result: "failed",
                data: {},
                message: `cannot upload images, Error is ${err}`
            });
        }
        var arrayOfFiles =files[""];
        if(arrayOfFiles.length > 0) {
            var fileNames = [];
            arrayOfFiles.forEach((eachFile) => {
                fileNames.push(eachFile.path.split('/')[1])
            })
            response.json({
                result : "ok",
                data: fileNames,
                numberOfImages: fileNames.length,
                message: "upload images successfully"
            })
        } else {
            response.json({
                result: "failed",
                data: {},
                numberOfImages: 0,
                message: "No images to upload"
            })
        }
    })

    // form.parse(req);
    // updates can be removed
    // const uploadFolder = path.join(__dirname, "public", "uploads");
    // form.uploadDir = uploadFolder;

    // form.on("fileBegin", (name, file) => {
        // file.filepath = (path.join(__dirname,`/uploads/${file.originalFilename}`));
        // file.filepath = uploadFolder + `${file.originalFilename}`;
    //     console.log(file);
    // })

    // form.on("file", (name, file) => {
    //     console.log(`Uploaded file ${file.originalFilename}`);
    //     data.msg = 'success';
    // })

    // form.on('error', (err) => {
    //     data.msg = "ERROR"
    //     console.log(err);
    //     console.log('ParsingError');
        // return res.sendStatus(400);
    //   })
        // res.send(JSON.stringify(data));
});

module.exports = router;