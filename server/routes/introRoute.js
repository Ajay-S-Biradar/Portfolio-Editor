const express = require('express');
const { editIntro, getIntro } = require('../controllers/introControllers');

const router = express.Router();

router.route('/').get(getIntro)
router.route('/:id').post(editIntro);

module.exports = router;