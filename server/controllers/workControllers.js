const asyncHandler = require('express-async-handler');
const Work = require('../models/work');

const getWorks = asyncHandler(async (req,res)=>{
    try{
        const works = await Work.find({});
        res.json(works);
    }catch(err){
        console.log(err);
        res.json({error:"Error While Fetching"});
    }
});

const addWork = asyncHandler(async (req,res)=>{
    const {header, desc, tags} = req.body;
    try{
        const newWork = await Work.create({
            header,
            desc,
            tags
        });
        if(!newWork){
            res.json({error:"Error while adding the work"});
        }
        res.json({added:true, newWork});
    }catch(err){
        console.log(err);
        res.json({error:"Error while adding the work"});
    }
    res.send("Work Added");
});

const updateWork = asyncHandler(async (req,res)=>{
    const {id} = req.params;

    try{
        const updatedWork = await Work.updateOne({_id:id}, req.body);
        if(!updatedWork){
            res.json({error:"Error while updating"});
        }
        else{
            res.json({updated:true})
        }
    }
    catch(err){
        console.log(err);
        res.send("Error");
    }
});

const deleteWork = asyncHandler(async (req,res)=>{
    const {id} = req.params;

    try{
        const deletedWork = await Work.deleteOne({_id:id});
        if(!deletedWork){
            res.json({error:"Error while Deleting"});
        }
        else{
            res.json({deleted:true});
        }
    }
    catch(err){
        console.log(err);
        res.send("Error");
    }
});

module.exports = {getWorks , addWork, updateWork, deleteWork}