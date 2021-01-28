const bcrypt = require('bcrypt');
const { render } = require('ejs');
const Catalog = require('../models/catalog');
const Product = require('../models/product');
var catalogs = [];
var products = [];

exports.getAll = (req, res) => {
    const catalogs = Catalog.fetchAll_cata();
    const products = Product.fetchAll();
    res.render('shop', { catalogs: catalogs, products: products })
}
exports.getIdCatalog = (req, res) => {
    const catalogs = Catalog.fetchAll_cata();
    var idctl = req.params.id;
    var products = Product.fetchAll_id(idctl)
    res.render('shop', { catalogs: catalogs, products: products })
}