const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDB = async ()=>{
    try{
        const connect =await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log("Connected to DB");
        }
    } catch(err){
        console.log("connection to mongo Error: ",err);
    }
}

module.exports = connectDB ;