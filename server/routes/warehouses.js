const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");
// const {
// 	default: InventoryList,
// } = require("../../client/src/Components/InventoryList/InventoryList"); // Requires Fixing

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
    compressedWarehouseList = parsedWarehouseList.map(warehouse => ({ id: warehouse.id, city: warehouse.name, address: warehouse.address + ',' + warehouse.city + ','
    + warehouse.country, contactName: warehouse.contact.name, contactNumber: warehouse.contact.phone, contactEmail: warehouse.contact.email}))
    res.status(200).send(JSON.stringify(parsedWarehouseList));
});

router.delete("/:id", (req, res) => {
	const selected = warehouseList.find((item) => item.id === req.params.id);
	const indexValue = warehouseList.indexOf(selected);

	warehouseList.splice(indexValue, 1);
	res.send("item deleted");
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

// Ignore -- wrote in advance for my AddForm and AddInventory Pages: 

// Add Warehouse

// let expressURL = "http://localhost:8080"
// let addwarehouse = "/warehouse/add";

    // let SubmitForm = (e) => {
    //     e.preventDefault();
    //     alert("Warehouse Added");
    //     axios.post(expressURL + addwarehouse, 
    //         {
    //             name: e.target.warehouseName.value,
    //             address: e.target.address.value,
    //             city: e.target.city.value,
    //             country: e.target.country.value,
    //             contactName: e.target.contactName.value,
    //             position: e.target.contactPosition.value,
    //             phone: e.target.contactNumber.value,
    //             email: e.target.contactEmail.value
    //         }
    //         })
    //     props.router.history.push("/warehouse");
    // }

