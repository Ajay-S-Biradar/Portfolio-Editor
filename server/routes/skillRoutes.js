const express = require('express');
const { addSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/skillControllers');

const router = express.Router();

router.route('/').get(getSkills).post(addSkill);
router.route('/:id').put(updateSkill).delete(deleteSkill);

module.exports = router;