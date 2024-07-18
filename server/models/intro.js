const mongoose = require('mongoose');

const introModel = new mongoose.Schema({
    greet:{
        type:String,
        default:"Hey"
    },
    intro:{
        type:String,
        default:"I'm a student"
    },
    info:{
        type:String,
    },
    imageUrl:{
        type:String,
        default:"https://img.freepik.com/premium-photo/environmental-scientist-digital-avatar-generative-ai_934475-9022.jpg?w=740"
    }
});

const Intro = mongoose.model("Intro",introModel);

module.exports = Intro;