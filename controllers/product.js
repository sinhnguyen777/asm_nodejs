const bcrypt = require('bcrypt');
const Product = require('../models/product')
const Catalog = require('../models/catalog')
exports.getAll = (req, res, next) => { 
    const products = Product.fetchAll();
    const cata = Product.fetchAll_cata();
    res.render('shop', {
        products:products,
        catalogs:cata,
        pageTitle: 'Shop',
        path: '/',
        activeShop: true,
    });
}

exports.getProduct = (req, res, next) => {
    const catalogs = Catalog.fetchAll_cata();
    const prodId = req.params.id;
    const prodetail = Product.findById(prodId, product => {
        console.log(product);
    });
    res.render('product-detail', {products:prodetail, catalogs:catalogs, catalog:[]});
};


// exports.getAll = (req, res, next) => {
//     const prodId = req.params.idctl;
//     const catalogs = Catalog.fetchId_Cata();
//     const prodetail = Product.fetchByCata(prodId, product => {
//         console.log(product);
//     });
//     res.render('product-details', {products:prodetail, catalogs:catalogs, catalog:[]});
// };


// exports.getProductDetail = (req, res) => {
//     //đọc database
//     res.render('product-detail');
// }