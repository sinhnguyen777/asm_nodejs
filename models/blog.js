var db=require('./database');
var data = [];
var posts =[];
module.exports = class Post {

    constructor() {

    }
    //trả về tất cả bài viết
    static async fetchAll() {
        let sql = `SELECT * FROM  product`;
        await db.query(sql, function(err, data) {
            if (err) throw err;
            posts=data;
            // console.log(posts);
    
        });
        return posts;
    }


    //thêm một bài viết
    static async addPost(newPost) {
        await db.query('insert into tblposts SET ?',newPost, function(err, data) {
            if (err) throw err;
            posts=data;
            // console.log(posts);
        })
    }
    
    //xoa bài viết theo mã
    static delPost(id) {
        db.query(`delete from tblPost where postId= ${id}`, function(err, data) {
            if (err) throw err;
            posts=data;
        })
    }
}



// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('books', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost'
// });
// //ORM
// const User = sequelize.define('product', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     author:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     detail:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     imgone:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     discount:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     print:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     price:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     hot:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     idclt:{
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//   },
//   { timestamps: false }
//   );
//   module.exports = User;
