const Blog = require('./Blog')
const data = []

async function writeDataBlog(){
    const length = await Blog.count();
    if(length == 0){
        data.map((item, index) =>{
            new Blog({
                name: item,
                key: index
            }).save()
        })
    }
}    
module.exports = writeDataBlog;