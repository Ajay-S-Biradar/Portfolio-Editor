const asyncHandler = require('express-async-handler');
const Skill = require('../models/skill');

const getSkills = asyncHandler(async (req, res) => {
    try {
        const skills = await Skill.find({});
        res.json(skills);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error while fetching skills" });
    }
});

const addSkill = asyncHandler(async (req, res) => {
    const { title, info, skills } = req.body;

    try {
        const newSkill = await Skill.create({ title, info, skills });
        if (!newSkill) {
            return res.status(400).json({ error: "Error while adding the skill" });
        }
        res.status(201).json({ added: true, newSkill });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error while adding the skill" });
    }
});

const updateSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedSkill) {
            return res.status(404).json({ error: "Skill not found" });
        }
        res.json({ updated: true, updatedSkill });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error while updating the skill" });
    }
});

const deleteSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
            return res.status(404).json({ error: "Skill not found" });
        }
        res.json({ deleted: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error while deleting the skill" });
    }
});

module.exports = { getSkills, addSkill, updateSkill, deleteSkill };
