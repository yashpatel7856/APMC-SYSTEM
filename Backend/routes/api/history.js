const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/User");
const Cart = require("../../models/Cart");
const cors = require("cors");

var jsonParser = bodyParser.json();

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

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.get('/histfarmer',async (req,res) => {
    const list = await Cart.find({farmer: req.body.farmer});
    if(list){
        res.json(list);
    }else{
        res.json({"error": '500'});  
    }
});

router.get('/histbuyer',async (req,res) => {
    const list = await Cart.find({buyer: req.body.buyer});
    if(list){
        res.json(list);
    }else{
        res.json({"error": '500'});  
    }
});

module.exports = router;