//Use controller
const home               = require('../controllers/home');
const product            = require('../controllers/product');
// const catalog            = require('../controllers/catalog');
const {render}           = require('ejs');
const express            = require('express');
const router             = express.Router();

//defid router
router.get('/', home.getIndex);
router.get('/shop', product.getAll);
router.get('/shop/catalog/:id', product.getIdCatalog);

module.exports = router;