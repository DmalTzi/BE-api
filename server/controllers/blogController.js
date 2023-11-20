const blogService = require("./../services/blogService")

const createBlog = async(req, res) => {
    const {title, content} = req.body
    const author = req.nickname
    try{
        await blogService.createBlog({title, content, author})
        res.json({message:"blog have created :3"})
    }catch(err){
        res.status(400).json({message:"can not create blog", err})
    }
}

const findBlogs = async(req, res) => {
    try{
        const response  = await blogService.findBlogs()
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({message:"can not find blog", err})
    }
}

const findOneBlog = async(req, res) => {
    try{
    const {title} = req.params
    const response = await blogService.findOneBlog(title)
        res.status(200).json(response)
    }catch(err){
        res.status(404).json({message:"can not find this blog", err})
    }
}

module.exports = {
    createBlog,
    findBlogs,
    findOneBlog,
}