const Sequelize = require('sequelize');
const db = require('./database');

var catalogs = [];
var products =[];
var cate =[];

module.exports = class Catalog {
    static fetchAll_cata() {    //trả về tất cả danh mục
        let sql = `SELECT * FROM catalog`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            catalogs=data;
        });
        return catalogs;
    }
    
    // static fetchAll() {
        
    //     let sql = `SELECT * FROM product `;
    //     db.query(sql, function(err, data) {
    //         if (err) throw err;
    //         products=data;
    //     });
    //     return products;
    // }

}
