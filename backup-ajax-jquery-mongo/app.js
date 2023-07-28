const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home")

const app = express();
const port = process.env.port || 8081

mongoose.connect("mongodb://127.0.0.1:27017/ajaxCrud").then(() => {
    console.log("Database connected successfully")
}).catch((error) => {
    console.log(error);
})

// app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public/index.html'));
      
// })



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static("public"))

app.use("/", homeRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

