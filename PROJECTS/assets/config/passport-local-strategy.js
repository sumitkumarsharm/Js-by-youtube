const passport = require('passport');


const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//Authentication useing passport
passport.use(new LocalStrategy({
    usernameField:'email'
   

   },
   function(email, password, done) {
    // Find a user and establish the identity
    User.findOne({ email: email })
        .then(user => {
            if (!user || user.password !== password) {
                console.log('Invalid Username/password');
                return done(null, false);
            }
            // User found and password matches
            return done(null, user);
        })
        .catch(err => {
            console.log('Error in finding User ----> passport');
            return done(err);
        });
}

    
    
));



//serializing the user to decide which key is to be kept ina cooked
passport.serializeUser(function(user,done){
    done(null, user.id);
})


// deserializing the user from thr key the cookies
passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => {
            if (!user) {
                // User not found
                return done(null, false);
            }
            return done(null, user);
        })
        .catch(err => {
            console.log('Error in finding User ----> passport');
            return done(err);
        });
});


//check if the user is authenticated
//if the user is sign in than pass on the request to the next function(controller's Action)
passport.checkAuthentication  = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/users/sign-in');
}


passport.setAuthenticatedUser = function(req,res, next){
    
    if(req.isAuthenticated()){
        //req.user contains the current signed in user form the seasion cookie and we are just sending this to the locals for the
        res.locals.user = req.user; 
    }
    next();
}
module.exports = passport;