const asyncHandler = require('express-async-handler');
const Intro = require('../models/intro');

const getIntro = asyncHandler (async (req,res)=>{
    try{
        const intro = await Intro.find({});
        if(!intro){
            res.json({error:"Error"});
        }
        res.json(intro);
    }catch(err){
        res.json({error:err});
    }
})

const editIntro = asyncHandler( async (req,res)=>{
    const {id} = req.params;
    try{
        const editedIntro = await Intro.updateOne({_id:id},req.body);
        if(!editedIntro){
            res.json({error:"Error"});
        }
        res.json(editedIntro);
    }catch(err){
        res.json({error:err});
    }
})

module.exports = {getIntro , editIntro}