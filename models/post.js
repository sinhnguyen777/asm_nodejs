const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// sử dụng postman với table
const Post = sequelize.define('tblposts', {
    postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_date: {
        type: Sequelize.DATE,
        allowNull: false,
    }
}, { timestamps: false });
module.exports = Post;