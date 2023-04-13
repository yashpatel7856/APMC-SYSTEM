const mongoose = require('mongoose');

const VegSchema = new mongoose.Schema({
    sr:{
        type:String 
    },
    vegname:{
        type:String 
    },
    price:{
        type:String 
    },
    packedOn:{
        type:String
    },
    ExpOn:{
        type:String
    },
    stock:{
        type:[String],
        require:true
    },
    desc:{
        type: String
    }, 
    Seller:{
        type: String
    },
    time:{
        type: Date,
        default: Date.now,
        unique: true
    }
});

module.exports = Veg = mongoose.model('vegetable',VegSchema);