const bcrypt = require('bcrypt');
const { render } = require('ejs');
const Catalog = require('../models/catalog');
const Product = require('../models/product');
var products = [];


exports.getAll = (req, res) => {


    const products = Product.fetchProductCata();

    res.render('shop', { products:products})
}