const bcrypt = require('bcrypt');
const { render } = require('ejs');
const Catalog = require('../models/catalog');
const Product = require('../models/product');
var catalogs = [];
var products = [];
var productDetail = [];
var comment = [];

exports.getAll = (req, res) => {
    const catalogs = Catalog.fetchAll_cata();
    const products = Product.fetchAll();
    res.render('shop', { catalogs: catalogs, products: products })
}
exports.getIdCatalog = (req, res) => {
    const catalogs = Catalog.fetchAll_cata();
    var idctl = req.params.id;
    var products = Product.fetchAll_id(idctl)
    res.render('shop', {catalogs:catalogs, products:products})
}
exports.getDetail = (req, res) => {
    var idPro = req.params.id;
    var productDetail = Product.findById(idPro);
    res.render('product-detail', {productDetail:productDetail})
}

exports.getComment = (req, res) => {
    var productId = req.params.idcmt;
    
    var cmt = req.body.message;
    var comment = Product.findComment(cmt, productId);
    res.render('product-detail', {products:products, comment:comment})
}

