const bcrypt = require('bcrypt');
const Catalog = require('../models/catalog');

exports.getIndex = (req, res) => {
    //đọc database
    res.render('home');
}