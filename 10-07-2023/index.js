const express = require("express");
const formidable = require("formidable");
const app = express();
const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/", (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on("fileBegin", (name, file) => {
        file.filepath = (path.join(__dirname,`/uploads/${file.originalFilename}`));
    })

    form.on("file", (name, file) => {
        console.log(`Uploaded file ${file.originalFilename}`);
    })

    res.sendFile(path.join(__dirname, "/index.html"));

})

app.listen(4000, () => {
    console.log("server is running on port 4000");
})