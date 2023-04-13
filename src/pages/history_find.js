const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Cart = require("../../models/Cart");
const Veg = require('../../models/Veg');
const cors = require("cors");

var jsonParser = bodyParser.json()

router.use(jsonParser);

const corsOptions ={
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

router.use(cors());

// var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.get('/historyvegbuyer', async (req,res) => {
    console.log("Got")
    console.log(req.body);
    const vegExist = await Cart.find({buyer: req.body.buyer});
    console.log(vegExist);
    if(vegExist){
        res.status(200).json(vegExist);
        return;
    }else{
        return res.send("Wrong ID");
    }
    res.send(req.body);
});

router.get('/historyvegfarmer', async (req,res) => {
    console.log("Got")
    console.log(req.body);
    const vegExist = await Cart.find({seller: req.body.farmer});
    console.log(vegExist);
    if(vegExist){
        res.status(200).json(vegExist);
        return;
    }else{
        return res.send("Wrong ID");
    }
    res.send(req.body);
});

module.exports = router;