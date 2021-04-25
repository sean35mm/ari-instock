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
	if (inventoryItem) {
		res.status(200).json(inventoryItem);
	} else {
		res.status(400).json({ message: "Cannot find the item in Inventory List" });
	}
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
	inventoryList[i].quantity = req.body.quantity;

	if (
		req.body.itemName === "" ||
		req.body.description === "" ||
		req.body.category === "" ||
		req.body.status === "" ||
		req.body.warehouseName === ""
	) {
		res
			.status(400)
			.json({ messages: "Content cannot be blank, please check your input" });
	} else if (!inventoryList[i]) {
		res.status(400).json({ messages: "Cannot find the item inventory" });
	} else {
		fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryList));
		//Send the updated item to the user
		res.status(201).json(inventoryList);
	}
});

router.delete("/:id", (req, res) => {
	const indexValue = inventoryList.findIndex(
		(item) => item.id === req.params.id
	);
	console.log(indexValue)
	if(indexValue < 0) {
		res.status(400).json({message: 'cannot find Item'});
	} else {
	inventoryList.splice(indexValue, 1);
	fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryList));
	res.json(inventoryList);
	}
});

router.post("/add", (req, res) => {
	let itemID = uuid.v4();
	let emptyCheck = 0;
	const inventoryList = fs.readFileSync("./data/inventories.json");
	let inventoryObj = JSON.parse(inventoryList);

	Object.values(req.body).forEach((item) => {
		if (item === "") {
			return (emptyCheck += 1);
		}
	});

	if (emptyCheck >= 1) {
		res.status(403).send("Empty Values found");
	} else if (req.body.quantity < 0) {
		res.status(403).send("Quantity cannot be less than or equal to 0");
	} else {
		let warehouseList = fs.readFileSync("./data/warehouses.json");
		let warehouseObj = JSON.parse(warehouseList);
		let whID = warehouseObj.filter(
			(warehouse) => warehouse.name === req.body.warehouseName
		)[0].id;

		let newItem = {
			id: itemID,
			warehouseID: whID,
			warehouseName: req.body.warehouseName,
			itemName: req.body.itemName,
			description: req.body.description,
			category: req.body.category,
			status: req.body.status,
			quantity: req.body.quantity,
		};

		inventoryObj.push(newItem);
		fs.writeFile(
			"./data/inventories.json",
			JSON.stringify(inventoryObj, null, 2),
			(err) => {
				if (err) {
					console.log(err);
				}
				console.log("new Item added");
			}
		);

		res.status(201).send(inventoryObj);
	}
});

module.exports = router;
