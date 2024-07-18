const mongoose = require("mongoose");

const aboutModel = new mongoose.Schema({
    desc:{
        type:String
    },
});

const About = mongoose.model("About", aboutModel);

module.exports = About ;