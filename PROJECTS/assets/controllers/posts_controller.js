const Post = require('../models/post');
const Comment = require('../models/comment');


module.exports.create = async function(req, res){
   try {
    const post = await Post.create({
        content: req.body.content,
        user: req.user._id
    });
    return res.redirect('back');
    
    console.log(post);
   } catch (error) {
    console.log('Error in creating post',error)
   };
};


// for Deeting the comments 
module.exports.destroy = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);

        // Check if the post is found
        if (!post) {
            return res.redirect('back');
        }

        //.id means converting the object id into string
        if (post.user == req.user.id) {
            await Post.findByIdAndDelete(req.params.id);
            await Comment.deleteMany({ post: req.params.id });
            return res.redirect('back');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.error(err);
        return res.redirect('back');
    }
};


