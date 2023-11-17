
const user = require('../models/user');
const User = require('../models/user');


module.exports.profile = function (req, res) {
  console.log(req.body)
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                // Handle the case where the user is not found
                return res.redirect('back');
            }

            return res.render('user_profile', {
                title: 'User Profile',
                profile_user: user
            });
        })
        .catch(err => {
            console.error(err);
            return res.redirect('back');
        });
};

//Update reqquest
module.exports.update = function(req, res){
  if(req.user.id == req.params.id){
    User.findByIdAndUpdate(req.params.id, req.body,function(err,post){
      return res.redirect('back')
    });
  }else{
    return res.status(401).send('Unauthorized')
  }
}

// render the sign up page
module.exports.signUp = function(req, res){
  if(req.isAuthenticated()){
    return res.redirect('/users/profile')
  }
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}
// render the sign in page
module.exports.signIn = function(req, res){
  if(req.isAuthenticated()){
    return res.redirect('/users/profile')
  }

  return res.render('user_sign_in', {
      title: "Codeial | Sign In"
  })
}




// get the sign up data
module.exports.create = async function (req, res) {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }
  
    // Find the user by email.
    const user = await User.findOne({ email: req.body.email });
  
    // If the user does not exist, create the user.
    if (!user) {
      await User.create(req.body);
      return res.redirect('/users/sign-in');
    }else{
      return res.redirect("back");
    }
  };


// Sign in and Create a Session for the users

module.exports.createSession = async function (req, res){
  return res.redirect('/')
}



module.exports.destroySession = function(req, res){
  req.logout(function(err) {
    res.redirect('/');
});
}
