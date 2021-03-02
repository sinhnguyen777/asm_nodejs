const posts = [];
const Post = require('../models/blog');
exports.getPosts = (req, res, next) => {
    const posts = Post.fetchAll()
    .then(
        r=>{
            res.status(200).json({
                posts:r
            });
            // res.render('/views/admin/index.html', { posts:r })
        }
    );
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;const content = req.body.content;
    const newPost={ title: title, content: content,create_date: new Date().toISOString()};
    const posts = Post.addPost(newPost).then(
        r => {
            res.status(201).json({
                message: 'Post created successfully!',
                post: newPost
            });
        }
    )
    // if(Post.addPost(newPost)){
    //     res.status(201).json({
    //         message: 'Post created successfully!',
    //         post: newPost
    //     });
    // }
    // else{
    //     res.status(500).json({
    //         message:"Có lỗi xay ra khi thêm mới post."
    //     });
    // }
};

// const Post = require('../models/blog')
// exports.getPosts = (req, res) => {
//     Post.findAll()
//     .then(posts=> {
//         res.status(200)
//         .json({message: 'Fetch posts successfully', posts:posts})

//     })
//     .catch( err=> {
//         res.status(500).json({message:err})
//     })
// }



    