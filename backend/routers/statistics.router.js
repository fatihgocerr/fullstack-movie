const express = require('express')

const router = express.Router();

const {statisticsController} = require('../controllers');
const authCheck = require("../middleware/auth.middleware");

router.get('/allCounts', statisticsController.getAllCounts)
router.get('/getGenre', statisticsController.getGenreCounts)


module.exports = router;