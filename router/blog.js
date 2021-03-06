const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blog')

//GET /blog/posts
router.get('/posts', blogController.getPost)

//GET  /blog/post
router.post('/addnew', blogController.createPost)
router.put('/edit/:id', blogController.update)
router.delete('/delete/:id', blogController.delete);

module.exports = router;