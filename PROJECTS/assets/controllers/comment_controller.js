const Comment  = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async (req, res)=> {
    try {
        console.log(req.body);
        // Use await with the findById method
        const post = await Post.findById(req.body.post);

        if (post) {
            const comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });

            post.comments.push(comment);
            await post.save();

            return res.redirect('/');
        } else {
            console.log('Post not found');
            return res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        // Handle any errors that occurred during the asynchronous operations
        console.error('Error creating comment:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports.destroy = function(req, res) {
    Comment.findById(req.params.id)
        .then(comment => {
            if (!comment) {
                // If the comment is not found
                return res.redirect('back');
            }

            if (comment.user.toString() === req.user.id) {
                let postId = comment.post;

                return Comment.deleteOne({ _id: req.params.id }) // Use deleteOne instead of remove
                    .then(() => Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } }));
            } else {
                return res.redirect('back');
            }
        })
        .then(() => res.redirect('back'))
        .catch(err => {
            console.error(err);
            return res.redirect('back');
        });
};
