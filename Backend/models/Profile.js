const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    location:{
        type:String 
    },
    mobile:{
        type:String 
    },
    role:{
        type:String,
        require:true
    },
    farming:{
        type:[String],
        require:true
    },
    bio:{
        type: String
    },
    
    date:{
        type: Date,
        default: Date.now 
    }
});

module.exports = Profile = mongoose.model('profile',ProfileSchema);