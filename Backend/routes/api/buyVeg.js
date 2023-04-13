const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Cart = require("../../models/Cart");
const Veg = require('../../models/Veg');
const User = require('../../models/User');
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

router.post('/buyveg', async (req,res) => {
    console.log(req.body);
    const vegExist = await Veg.findOne({_id: req.body.id});
    if(vegExist){
        let d = new Date();
        const obj = await {
            date: d.getDate(),
            farmer: vegExist.Seller,
            vegname: vegExist.vegname,
            stock: vegExist.stock,
            buyer: req.body.buyer,
            price: parseInt(vegExist.price) * parseInt(vegExist.stock),
        }
        await Veg.deleteOne({_id: req.body.id});
        const user = await User.findById(req.body.userid);
        await user?.buyed_vegies?.unshift(obj);
        await user?.save();
        const cart = new Cart(obj);
        console.log(cart);
        await cart.save();

        res.status(200).send("Deleted");

        return;
    }else{
        return res.send("Wrong ID");
    }
    res.send(req.body);
});

module.exports = router;