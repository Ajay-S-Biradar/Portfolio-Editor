const express = require('express');
const { getAbout, addAbout, updateAbout, deleteAbout } = require('../controllers/aboutControllers');

const router = express.Router();

router.route('/').get(getAbout).post(addAbout);
router.route('/:id').post(updateAbout).delete(deleteAbout);

module.exports = router;