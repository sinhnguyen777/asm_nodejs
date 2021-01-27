const bcrypt = require('bcrypt');
const Catalog = require('../models/catalog');

exports.getCatalog = (req, res, next) => { 
    const catalogs = Catalog.fetchAll_cata();
    res.render('shop', {
        catalogs:catalogs,
    });
}
// exports.getCatalog = (req, res, next) => { 
//     let idctl=req.params.idctl;
//     const catalogs = Catalog.fetchId_Cata(idctl);
//     res.render('shop', {
//         catalogs:catalogs,
//         catalogs:[]
//     });
// }
