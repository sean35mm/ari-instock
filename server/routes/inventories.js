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

router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const inventoryItem = inventoryList.find(item => item.id === itemId);
    if(inventoryItem) {
        res.status(200).json(inventoryItem);
    } else {
        res.status(400).json({message: 'Cannot find the item in Inventory List'});
    }
})

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    let i = inventoryList.findIndex(item => item.id === itemId);
    // Change content of the item
    inventoryList[i].itemName = req.body.itemName;
    inventoryList[i].description = req.body.description;
    inventoryList[i].category = req.body.category;
    inventoryList[i].status = req.body.status;
    inventoryList[i].warehouseName = req.body.warehouseName;
    inventoryList[i].warehouseID = req.body.warehouseID;

    if (req.body.itemName === '' || req.body.description === '' 
    || req.body.category === '' || req.body.status === '' || req.body.warehouseName === '' ) {
        res.status(400).json({messages: 'Content cannot be blank, please check your input'});
        
    } else if (!inventoryList[i]) {
        res.status(400).json({messages: 'Cannot find the item inventory'});
    } else {
        fs.writeFileSync('./data/inventories.json', JSON.stringify(inventoryList));
        //Send the updated item to the user
        res.status(201).json(inventoryList);   
    }
})





module.exports = router;