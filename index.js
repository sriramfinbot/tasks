const express = require("express");
const path = require("path");
const app = express();


// app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");


app.get('/:name', function (req, res) {
    var parameters = req.params['name'];
    // res.sendFile(path.join(__dirname, `./${parameters}.html`));
    res.render(`${parameters}`);
 });

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
})