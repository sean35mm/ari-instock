const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

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

router.get('/', (_req, res) => {
    let warehouseList = fs.readFileSync("./data/warehouses.json")
    let parsedWarehouseList = JSON.parse(warehouseList)
    compressedWarehouseList = parsedWarehouseList.map(warehouse => ({
        id: warehouse.id, city: warehouse.name, address: warehouse.address + ',' + warehouse.city + ','
            + warehouse.country, contactName: warehouse.contact.name, contactNumber: warehouse.contact.phone, contactEmail: warehouse.contact.email
    }))
    res.status(200).send(JSON.stringify(parsedWarehouseList));
});

router.put("/:id", (req, res) => {
    console.log(req.body)
	const warehouseId = req.params.id;   
    let emptyInput = 0
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^(\+\d{1})?[ ]?(\([0-9]{3}\))?[- ]?([0-9]{3})[- ]?([0-9]{4})$/
	let i = warehouseList.findIndex((warehouse) => warehouse.id === warehouseId);

    console.log(Object.values(req.body))
	// Editing warehouse
	warehouseList[i].name = req.body.name;
	warehouseList[i].address = req.body.address;
	warehouseList[i].city = req.body.city;
	warehouseList[i].country = req.body.country;
	warehouseList[i].contact.name = req.body.contactName;
    warehouseList[i].contact.position = req.body.contactPosition;
    warehouseList[i].contact.phone = req.body.contactPhone;
    warehouseList[i].contact.email = req.body.contactEmail;

    Object.values(req.body).forEach(item => {
        if (item === "") {
            return emptyInput += 1
        }
    });

	if (
		req.body.name === "" ||
		req.body.address === "" ||
		req.body.city === "" ||
		req.body.country === "" ||
		req.body.contactName === "" ||
        req.body.contactPosition === "" ||
		req.body.contactPhone === "" ||
		req.body.contactEmail === ""
	) {
		res
			.status(400)
			.json({ messages: "All fields are required" });
	} else if (!warehouseList[i]) {
		res.status(400).json({ message: "Cannot find Warehouse" });   
	} else if (emptyInput >= 1) {
        res.status(403).send("Empty values entered");
    } else if (!emailRegex.test(req.body.contactEmail)) {
        res.status(403).send("Please enter a valid e-mail address");
    } else if (!phoneRegex.test(req.body.contactPhone)) {
        res.status(403).send("Please enter a valid phone number");
    } 
    else {
		fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseList));
		//Send updated info
		res.status(201).json(warehouseList);
	}
});

router.delete("/:id", (req, res) => {
    const indexValue = warehouseList.findIndex(
        (item) => item.id === req.params.id
    );
    warehouseList.splice(indexValue, 1);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseList));
    res.send(warehouseList);
});

router.post('/add', (req, res) => {
    let whID = uuid.v4();
    let emptyCheck = 0
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/
    const warehouseList = fs.readFileSync("./data/warehouses.json")
    let warehouseObj = JSON.parse(warehouseList);


    Object.values(req.body).forEach(item => {
        if (item === "") {
            return emptyCheck += 1
        }
    });


    if (emptyCheck >= 1) {
        res.status(403).send("Empty Values found");
    } else if (!emailRegex.test(req.body.email)) {
        res.status(403).send("Incorrect Email Entered");
    } else if (!phoneRegex.test(req.body.phone)) {
        res.status(403).send("Incorrect Phone Number Entered")
    } else {
        let newWarehouse = {
            id: whID,
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            contact: {
                name: req.body.contactName,
                position: req.body.position,
                phone: req.body.phone,
                email: req.body.email
            }
        }

        warehouseObj.push(newWarehouse);
        fs.writeFile("./data/warehouses.json", JSON.stringify(warehouseObj, null, 2), (err) => {
            if (err) {
                console.log(err)
            }
            console.log("new Warehouse added")
        })

        res.status(201).send(warehouseObj);
    }
})

module.exports = router;

