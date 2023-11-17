const express = require('express');

const router = express.Router();
console.log(`this is a route`)
//first controller
const homeController = require('../controllers/home_controller')
router.get('/', homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./post'));
router.use('/comments', require('./comments'));


//assigment Part for prectice
router.use('/social',require('./social'));//this route only for my prectice that why i was made this



//2nd another controller
const ActionController = require('../controllers/home_controller');
router.get('/Ask',ActionController.Action)

//3rd controller
const RepliesController = require('../controllers/home_controller');
router.get('/Ask/Reply',RepliesController.Reply)




module.exports = router;  