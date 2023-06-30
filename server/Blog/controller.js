const Blog = require('./Blog');

const getAllBlog = async(req , res) =>{
    const data = await Blog.find()
    res.send({data})
}

const newBlog = async(req , res) =>{
    if(req.body.titleBlog.lenght != 0 &&
        req.body.category.lenght != 0  &&
        req.body.content.lenght != 0
       ){
        await new Blog({
            titleBlog: req.body.titleBlog,
            category: req.body.category,
            content: req.body.content,
            image: `${req.file.destination}/${req.file.filename}`
        }).save()
        res.redirect(`/profile/${req.user._id}`)
    }else{
        res.redirect(`/new?error=1`)
    }
};

const editBlog = async(req, res) => {
    await Blog.updateOne(
        {
            _id: req.body.id
        },
        {
            titleBlog: req.body.titleBlog,
            category: req.body.category,
            content: req.body.content,
        }
    )
    res.redirect("/profile/:id")
};

const deleteBlog = async(req, res)=>{
    await Blog.deleteOne({id: req.params.id})
    res.status(200).send('ok')
}

module.exports = {
    getAllBlog,
    newBlog,
    editBlog, 
    deleteBlog,
}