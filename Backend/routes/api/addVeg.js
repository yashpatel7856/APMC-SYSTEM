const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Veg = require("../../models/Veg");
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

router.post('/addveg', async (req,res) => {
    console.log(req.body);
    const vegi = new Veg({
        sr:req.body.sr,
        vegname: req.body.vegname,
        price: req.body.price,
        packedOn: req.body.packedOn,
        expOn: req.body.expOn,
        stock: req.body.stock,
        desc: req.body.desc,
        Seller: req.body.seller
    });
    vegi.save().then((result) => {
        return res.json({...vegi ,success : true});
    }).catch(err => res.status(300).send(err));
});

module.exports = router;
