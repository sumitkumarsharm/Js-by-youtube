const Post = require('../models/post');
const user = require('../models/user');
const User = require('../models/user');



module.exports.home = async function (req, res) {
    try {
        const posts = await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        })
        .exec();
        let users  = await User.find({})
        if(users){
            return res.render('home', {
                        title: 'codial | Home',
                        posts: posts,
                        all_users:users
                    });            
        }
                
    } catch (err) {
        // Handle the error appropriately, for example, send an error response
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};


















//second controller
module.exports.Action = function(req,res){
    return res.end('<h1>this is a second controller that is use to adding somthing </h1>')
}

//third controller
module.exports.Reply = function(req,res){
    return res.end('<h1>Controllers are responsible for handling incoming requests and returning responses to the client. A controllers purpose is to receive specific requests for the application.</h1>');;
}