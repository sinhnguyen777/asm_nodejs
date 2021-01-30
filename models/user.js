const Sequelize = require('sequelize');

const sequelize = new Sequelize('books', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});
//ORM
const User = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_email:{
      type: Sequelize.STRING,
      allowNull: false
    },
    user_pass:{
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
  );
  module.exports = User;
