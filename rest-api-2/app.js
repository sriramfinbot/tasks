require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
    res.send("Hi, i am live");
});

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

// middleware or to set router 
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT); 
        console.log(`Server is running on port ${PORT} successfully`);
    } catch (error){
        console.log(error);
    }
    
}

start();  

