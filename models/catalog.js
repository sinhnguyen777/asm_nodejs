const Sequelize = require('sequelize');
const db = require('./database');
var catalogs=[];

module.exports = class Catalog {
    static fetchAll_cata() {    //trả về tất cả danh mục
        let sql = `SELECT * FROM catalog`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            catalogs=data;
            // console.log(catalog);
        });
        return catalogs;
    }
    
    static fetchId_Cata() {
        let idctl=req.params.idctl;
        let sql = `SELECT * FROM product where idctl=${idctl};select * from catalog`;
        db.query(sql, function(err, data) {
            if (err) throw err;
            catalogs=data;
        });
        return catalogs;
    }

}
