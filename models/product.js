const Sequelize = require('sequelize');
const db = require('./database');
var products=[];
var catalogs=[];
var productDetail = [];

module.exports = class Product {
    //trả về tất cả sản phẩm
    static fetchAll() {    
        let sql = `SELECT * FROM product`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            products=data;
        });
        return products;
    }

    //trả về tất cả danh mục
    static fetchAll_cata() {   
        let sql = `SELECT * FROM catalog`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            catalogs=data;
        });
        return catalogs;
    }

    //show sản phẩm chi tiết
    static findById(id) {
        // let productId = req.params.productId;
        let sql = `SELECT * FROM product where id=${id}`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            products=data;
        });
        return products;
    }

    //trả về sản phẩm theo danh mục
    // static fetchProductCata() {   
    //     let cateId = req.params.id_catalog;
    //     let sql = `SELECT * FROM product where id_catalog=${cateId};select * from catalog`;
    //     db.query(sql, function(err, data) {
    //         if (err) throw err;
    //         catalogs=data;
    //     });
    //     return catalogs;
    // }
}