const express = require("express");
const app = express();
const  cors = require("cors");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
require('dotenv').config();

const {PORT, BACKEND_URL} = process.env
console.log(PORT);
console.log(BACKEND_URL);

app.use(express.json());
app.use(cors());

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server Running...")
    }})
