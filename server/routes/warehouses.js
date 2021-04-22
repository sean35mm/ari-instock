const express = require('express');
const router = express.Router();
const uuid = require("uuid");
const fs = require('fs');

let warehouseList = [];
fs.readFile('./data/warehouses.json','utf8', (err, data) => {
    err?console.info(err):warehouseList = JSON.parse(data)});

router.get('/', (req, res) => {
    res.status(200).json(warehouseList);
})

module.exports = router;