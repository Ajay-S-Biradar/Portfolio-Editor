const mongoose = require('mongoose');

const workModel = new mongoose.Schema({
    header:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    tags:{
        type:Array
    }
});

const Work = mongoose.model("Work",workModel);

module.exports = Work;