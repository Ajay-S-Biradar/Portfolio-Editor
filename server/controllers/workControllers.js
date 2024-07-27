const asyncHandler = require('express-async-handler');
const Work = require('../models/work');

const getWorks = asyncHandler(async (req, res) => {
    try {
        const works = await Work.find({});
        res.json(works);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error While Fetching" });
    }
});

const addWork = asyncHandler(async (req, res) => {
    const { header, desc, tags } = req.body;
    try {
        const newWork = await Work.create({
            header,
            desc,
            tags
        });
        if (!newWork) {
            return res.status(500).json({ error: "Error while adding the work" });
        }
        res.json({ added: true, newWork });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error while adding the work" });
    }
});

const updateWork = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const updatedWork = await Work.updateOne({ _id: id }, req.body);
        if (updatedWork.nModified === 0) {
            return res.status(404).json({ error: "Error while updating" });
        }
        res.json({ updated: true });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

const deleteWork = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedWork = await Work.deleteOne({ _id: id });
        if (deletedWork.deletedCount === 0) {
            return res.status(404).json({ error: "Error while Deleting" });
        }
        res.json({ deleted: true });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

module.exports = { getWorks, addWork, updateWork, deleteWork };
