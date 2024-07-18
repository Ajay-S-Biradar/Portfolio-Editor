const mongoose = require('mongoose');

const skillModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    }
});

const Skill = mongoose.model("Skill",skillModel);

module.exports = Skill;