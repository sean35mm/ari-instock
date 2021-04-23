const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

let inventoryList = [];
fs.readFile("./data/inventories.json", "utf8", (err, data) => {
	err ? console.info(err) : (inventoryList = JSON.parse(data));
});

router.get("/", (req, res) => {
	res.status(200).json(inventoryList);
});

router.get("/:id", (req, res) => {
	const itemId = req.params.id;
	const inventoryItem = inventoryList.find((item) => item.id === itemId);
	res.status(200).json(inventoryItem);
});

router.put("/:id", (req, res) => {
	const itemId = req.params.id;
	let i = inventoryList.findIndex((item) => item.id === itemId);
	// Change content of the item
	inventoryList[i].itemName = req.body.itemName;
	inventoryList[i].description = req.body.description;
	inventoryList[i].category = req.body.category;
	inventoryList[i].status = req.body.status;
	inventoryList[i].warehouseName = req.body.warehouseName;
	inventoryList[i].warehouseID = req.body.warehouseID;
	// Write back to the JSON file
	if (inventoryList[i]) {
		fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryList));
		//Send the updated item to the user
		res.status(201).json(inventoryList[i]);
	} else {
		res.status(400).json({ messages: "Cannot find the item inventory" });
	}
});

router.delete("/:id", (req, res) => {
	const selected = inventoryList.find((item) => item.id === req.params.id);
	const indexValue = inventoryList.indexOf(selected);

	inventoryList.splice(indexValue, 1);
	res.send("item deleted");
});

module.exports = router;
