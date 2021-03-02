const express = require('express')
const blogController = require('../controllers/blog')
const router = express.Router();

//GET /blog/posts
router.get('/posts', blogController.getPosts)

//GET  /blog/post
router.post('/addnew', blogController.createPost)

module.exports = router;