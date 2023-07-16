const Blog = require('./Blog');
const fs = require('fs');
const path = require('path');


const getAllBlog = async(req , res) =>{
    const data = await Blog.find()
    res.send({data})
}

const newBlog = async(req , res) =>{
    if( req.file &&
        req.body.titleBlog.lenght != 0 &&
        req.body.category.lenght != 0  &&
        req.body.content.lenght != 0
       ){
        await new Blog({
            titleBlog: req.body.titleBlog,
            category: req.body.category,
            content: req.body.content,
            image: `/images/blogsImg/${req.file.filename}`,
            author: req.user._id
        }).save()
        res.redirect(`/profile/${req.user._id}`)
    }else{
        res.redirect(`/new?error=1`)
    }
};

const editBlog = async(req, res) => {
    if( req.file &&
        req.body.titleBlog.lenght != 0 &&
        req.body.category.lenght != 0  &&
        req.body.content.lenght != 0
       ){
            const blog = await Blog.findById(req.body.id)
            fs.unlinkSync(path.join(__dirname + '../../../public/' + blog.image))
            // blog.titleBlog = req.body.titleBlog,
            // blog.category = req.body.category,
            // blog.content = req.body.content,
            // blog.image = `/images/blogsImg/${req.file.filename}`,
            // blog.save() 
            await Blog.findByIdAndUpdate(req.body.id, {
                titleBlog: req.body.titleBlog,
                category: req.body.category,
                content: req.body.content,
                image: `/images/blogsImg/${req.file.filename}`,
                author: req.user._id,
            })  
            res.redirect('/profile/' + req.user._id)  
        } else{
             res.redirect(`/edit/${req.body.id}?error=1`)
        }
};

const deleteBlog = async(req, res)=>{
    const blog = await Blog.findById(req.params.id)
    if(blog){
        fs.unlinkSync(path.join(__dirname + '../../../public/' + blog.image))
        await Blog.deleteOne({_id: req.params.id})
        res.status(200).send('ok')
    } else{
        res.status(404).send('Not found')
    }
}

module.exports = {
    getAllBlog,
    newBlog,
    editBlog, 
    deleteBlog,
}