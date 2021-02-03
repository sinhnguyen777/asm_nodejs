const Sequelize = require('sequelize');
const db = require('./database');
var products = [];
var catalogs = [];
var cate = [];
var productDetail = [];
var comment = [];

module.exports = class Product {

    //trả về tất cả sản phẩm
    static fetchAll() {
        let sql = `SELECT * FROM product`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            products = data;
        });
        return products;
    }

    //trả về sản phẩm theo danh mục
    static fetchAll_id(idctl) {
        // var id=req.params.id;
        let sql = `SELECT * FROM product where idctl=${idctl}`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            products = data;
        });
        return products;
    }
    
    //show sản phẩm chi tiết
    static findById(idPro) {
        // let productId = req.params.id;
        let sql = `SELECT * FROM product where id=${idPro}`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            productDetail=data;
        });
        return productDetail;
    }
    //comment
    static findComment(cmt, productId, id_user) {
        let sql = `INSERT INTO comment (content, id_product, id_user) VALUES ('${cmt}', '${productId}', '${id_user}')`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            comment=data;
        });
        return comment;
    }
}