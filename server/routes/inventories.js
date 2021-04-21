const express = require('express');
const router = express.Router();
const uuid = require("uuid");
const fs = require('fs');

let inventoryList = [];
fs.readFile('./data/inventories.json','utf8', (err, data) => {
    err?console.info(err):inventoryList = JSON.parse(data)});

router.get('/', (req, res) => {
    res.status(200).json(inventoryList);
})





module.exports = router;