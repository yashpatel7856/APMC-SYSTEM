const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    vegname:{
        type:String 
    },
    price:{
        type:String 
    },
    stock:{
        type:[String],
        require:true
    }, 
    farmer:{
        type: String
    }, 
    buyer:{
        type: String
    },
    time:{
        type: Date,
        default: Date.now,
        unique: true
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);