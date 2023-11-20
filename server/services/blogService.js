const Blogs = require("./../models/blogModel")

const createBlog = async(data) => {
    try{
        return await Blogs.create(data)
    }catch(err){
        console.log(err)
    }
}

const findBlogs = async() => {
    try{
        return await Blogs.find()
    }catch(err){
        console.log(err)
    }
}

const findOneBlog = async(data) => {
    try{
        return await Blogs.findOne({"title":data})
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createBlog,
    findOneBlog,
    findBlogs,
}