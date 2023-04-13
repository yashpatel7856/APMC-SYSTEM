const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    user:{
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
    text:{
        type: String
    },
    name:{
        type:String
    },
    vegetable:{
        type:String
    },
    price:{
        type:String,
        require:true
    },
    stock:{
        type:String,
        require:true
    },
    likes :[
        {
            user:{
                type : Schema.Types.ObjectId,
                ref : 'users'
            },
        }
    ],
    comments:[
        {
            user:{
                type : Schema.Types.ObjectId,
                ref : 'users'
            },

            text:{
                type: String,
                required:true
            },
            name:{
                type:String
            },
            avtar:{
                type:String
            },
            date:{
                type:Date,
                default:Date.now()
            }
        }
    ]
});

module.exports =Post = mongoose.model('post',PostSchema);