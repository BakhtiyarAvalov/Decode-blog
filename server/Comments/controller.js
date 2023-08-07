const Comment = require('./Comment')

const saveComment = async(req, res) => {
    console.log(req.body);
    if(req.body.authorId && req.body.blogId)
        await new Comment({
            text: req.body.text,
            authorId: req.body.authorId,
            blogId: req.body.blogId,
            date: Date.now()
        }).save()
   res.status(200).send(true) 
}

module.exports = {
    saveComment
}