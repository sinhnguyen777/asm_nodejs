//Use controller
const home               = require('../controllers/home');
const product            = require('../controllers/product');
const user               = require('../controllers/user');
const {render}           = require('ejs');
const express            = require('express');
const router             = express.Router();

//defid router
router.get('/', home.getIndex);
router.get('/shop', product.getAll);
router.get('/shop/catalog/:id', product.getIdCatalog);
router.get('/product-detail/:id', product.getDetail);
router.post('/product-detail', product.getComment);
router.get('/login', user.getLogin);
router.post('/login', user.actionLogin);
router.get('/register', user.getRegistion);
router.post('/register', user.getRegister);

module.exports = router;