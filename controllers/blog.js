// const posts = [];
// const Post = require('../models/blog');
// exports.getPosts = (req, res, next) => {
//     const posts = Post.fetchAll()
//     .then(
//         r=>{
//             res.status(200).json({
//                 posts:r
//             });
//             // res.render('/views/admin/index.html', { posts:r })
//         }
//     );
// };

// exports.createPost = (req, res, next) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     const newPost={ title: title, content: content,create_date: new Date().toISOString()};
//     const posts = Post.addPost(newPost)
//     .then(
//         r => {
//             res.status(201).json({
//                 message: 'Post created successfully!',
//                 post: newPost
//             });
//         }
//     )

//     if(Post.addPost(newPost)){
//         res.status(201).json({
//             message: 'Post created successfully!',
//             post: newPost
//         });
//     }
//     else{
//         res.status(500).json({
//             message:"Có lỗi xay ra khi thêm mới post."
//         });
//     }
// };


// // const Post = require('../models/blog')
// // exports.getPosts = (req, res) => {
// //     Post.findAll()
// //     .then(posts=> {
// //         res.status(200)
// //         .json({message: 'Fetch posts successfully', posts:posts})

// //     })
// //     .catch( err=> {
// //         res.status(500).json({message:err})
// //     })
// // }



const Post = require('../models/post');
// show tất cả
exports.getPost = (req, res) => {
    Post.findAll().then(post => {
        res.status(200).json({ message: 'Hello post sucessfully', post: post });
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
}

//Thêm
exports.createPost = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const image = req.body.image;
    const post = new Post({ title: title, image: image, content: content, create_date: new Date().toISOString })

    post
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Them thanh cong new post',
                post: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })

}

// Xoá
exports.delete = (req, res) => {
    Post.destroy({
        where: {
            postId: req.params.id
        }
    })
    .then(function (deletedRecord) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    });
}

// Sửa
exports.update = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const title = req.body.title;
    const image = req.body.image;
    const content = req.body.content;
    const post = new Post({ title: title, image: image, content: content })
    post.update({
        // title: title, content: content,
        where: {
           id
        },
        
    })
    .then(result => {
        res.status(201).json({
            message: 'Update thanh cong new post',
            post: result
        });
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
}
