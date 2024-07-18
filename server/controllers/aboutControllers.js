const About = require('../models/about');
const asyncHandler = require('express-async-handler');

const getAbout = asyncHandler(async (req,res)=>{
    try{
        const about = await About.find({});
        res.json(about);
    }
    catch(err){
        res.json({error:"Error while fetching the data"});
    }
})

const addAbout = asyncHandler( async (req,res)=>{
    const {description} = req.body;
    try{
        const newAbout = await About.create({
            desc:description
        })
        if(!newAbout){
            res.send({error:"Error while adding the abouts"});
        }
        res.send({added:true, newAbout});
    }catch(err){
        console.log(err);
        res.status(200).json({error:true});
    }
})

const updateAbout = asyncHandler( async (req,res)=>{
    const {id} = req.params;

    try{
        const updatedAbout = await About.updateOne({_id:id}, req.body);
        if(!updatedAbout){
            res.json({error:"Error while updating"});
        }
        res.json({updated:true, updatedAbout});
    }
    catch(err){
        res.json({error:true});
    }
})

const deleteAbout  = asyncHandler( async (req,res)=>{
    const {id} = req.params ;

    try{
        const deletedAbout = await About.deleteOne({_id:id});
        if(!deletedAbout){
            res.json({error:"Error while deleting"});
        }
        res.json({deleted:true});
    }
    catch(err){
        console.log(err);
        res.json({error:true})
    }
})

module.exports = { addAbout, deleteAbout, updateAbout, getAbout}