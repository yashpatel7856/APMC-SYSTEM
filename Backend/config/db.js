const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');
const connectToDb =()=>{
    mongoose.connect (mongoURI,()=>{
        console.log('your database is connected with mongo');
    })
}
module.exports = connectToDb;