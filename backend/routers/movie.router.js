const express = require('express');
const router = express.Router();

const {movieController} = require('../controllers');

router.get('/', (req, res) => {
 res.send('Hello World!');
})

router.post('/create', movieController.createMovie);




module.exports = router;