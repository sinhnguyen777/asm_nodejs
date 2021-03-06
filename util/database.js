const Sequelize = require('sequelize');

const sequelize = new Sequelize('books', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;