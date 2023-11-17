const express = require('express');
const router = express.Router();
const passport =  require('passport')



const UsersController = require('../controllers/users_controller');
router.get('/profile/:id',passport.checkAuthentication,UsersController.profile);
router.post('/update/:id',passport.checkAuthentication,UsersController.update);

router.get('/Sign-up',UsersController.signUp);

router.get('/Sign-In',UsersController.signIn);

router.post('/create',UsersController.create);
// router.post('/create-session', UsersController.createSession
// router.post('/user/profile',(req,res)=>{res.render('user_profile')}, UsersController.profile);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),UsersController.createSession)

router.get('/sign-out',UsersController.destroySession);


module.exports = router;  