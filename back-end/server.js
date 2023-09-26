const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDb = require("./src/config/db");
const multer = require("multer");
const path = require("path");

const port = process.env.PORT || 5000;  // Assign PORT for Server listening
let routes = require("./src/routes")

connectDb();

const app = express();


routes.init(app);

app.use(cors());

app.use(express.json());    // JSON parser

app.use("/images/", express.static(path.join(__dirname, "/images")));

// Server 

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});