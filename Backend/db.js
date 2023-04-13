const mongoose = require('mongoose');

const connectToDb = () => {
mongoose.connect('mongodb+srv://GanduYash:TimePeKyuBolta@db1.sod2mix.mongodb.net/?retryWrites=true&w=majority').then((res)=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err);
});
}

module.exports = connectToDb;