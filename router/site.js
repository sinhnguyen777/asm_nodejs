//Use controller
const home               = require('../controllers/home');
const catalog            = require('../controllers/product');
const product            = require('../controllers/product');
// const productdetail      = require('../controllers/product');
// const login              = require('../controllers/user');
// const register           = require('../controllers/user');
const {render}           = require('ejs');
const express            = require('express');
const router             = express.Router();

//defid router
router.get('/', home.getIndex);
router.get('/shop/:id', product.getProduct);
router.get('/shop', catalog.getAll);
router.get('/shop', product.getAll);
// router.get('/product-detail', productdetail.getProductDetail);
// router.get('/login', login.getLogin);
// router.get('/register', register.getRegister);

module.exports = router;