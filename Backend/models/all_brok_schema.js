const mongoose = require('mongoose');

const BrokerSchema = new mongoose.Schema({
    shop_no:{
        type:int,
        required:true
    },
    shop_name:{
        type:String,
        required:true
    },
    owner_name:{
        type:String,
        required: true
    },
    contact:{
        type:int
    }
});

module.exports =User =mongoose.model('allbroker',BrokerSchema);