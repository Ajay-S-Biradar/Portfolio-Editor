const express = require('express');
const { addWork, deleteWork, getWorks, updateWork } = require('../controllers/workControllers');

const router = express.Router();

router.route('/').get(getWorks).post(addWork);
router.route('/:id').post(updateWork).delete(deleteWork);

module.exports = router;