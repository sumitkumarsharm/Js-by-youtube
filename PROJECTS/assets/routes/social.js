const express = require('express');
const router = express.Router();
console.log("this is for prectice");


const socialController = require('../controllers/social_controller');
router.get('/social',socialController.social);


module.exports = router;