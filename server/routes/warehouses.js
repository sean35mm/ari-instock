const express = require('express');
const router = express.Router();
const uuid = require("uuid");
const fs = require('fs');
const warehouseDetails = require("../data/warehouses.json");

router.use(express.json());

router.use(function requestLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (_req, res) => {
    let warehouseList = fs.readFileSync("./data/warehouses.json")
    let parsedWarehouseList = JSON.parse(warehouseList)
    compressedWarehouseList = parsedWarehouseList.map(warehouse => ({ id: warehouse.id, city: warehouse.name, address: warehouse.address + ',' + warehouse.city + ','
    + warehouse.country, contactName: warehouse.contact.name, contactNumber: warehouse.contact.phone, contactEmail: warehouse.contact.email}))

    res.status(200).send(JSON.stringify(compressedWarehouseList));
});

module.exports = router;