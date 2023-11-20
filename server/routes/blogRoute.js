const router = require('express').Router()
const blogController = require("./../controllers/blogController")
const userMiddleware = require("./../middlewares/userMiddleware")

router.post('/create', userMiddleware.user, blogController.createBlog)
router.get('/render', userMiddleware.user, blogController.findBlogs)
router.get('/render/one/:title', userMiddleware.user, blogController.findOneBlog)

module.exports = router