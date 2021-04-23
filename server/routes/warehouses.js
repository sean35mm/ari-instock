const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");
// const {
// 	default: InventoryList,
// } = require("../../client/src/Components/InventoryList/InventoryList");

router.use(express.json());

let warehouseList = [];
fs.readFile("./data/warehouses.json", "utf8", (err, data) => {
	err ? console.info(err) : (warehouseList = JSON.parse(data));
});

router.use(function requestLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

router.get("/", (req, res) => {
	res.status(200).json(warehouseList);
});

router.get("/:id", (req, res) => {
	const warehouseId = req.params.id;
	const warehouseItem = warehouseList.find((item) => item.id === warehouseId);
	res.status(200).json(warehouseItem);
});

// router.get('/', (_req, res) => {
//     let warehouseList = fs.readFileSync("./data/warehouses.json")
//     let parsedWarehouseList = JSON.parse(warehouseList)
//     // compressedWarehouseList = parsedWarehouseList.map(warehouse => ({ id: warehouse.id, city: warehouse.name, address: warehouse.address + ',' + warehouse.city + ','
//     // + warehouse.country, contactName: warehouse.contact.name, contactNumber: warehouse.contact.phone, contactEmail: warehouse.contact.email}))
//     res.status(200).send(JSON.stringify(parsedWarehouseList));
// });

router.delete("/:id", (req, res) => {
	const selected = warehouseList.find((item) => item.id === req.params.id);
	const indexValue = warehouseList.indexOf(selected);

	warehouseList.splice(indexValue, 1);
	res.send("item deleted");
});

module.exports = router;
