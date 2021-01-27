const express    = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('add-product');
})
// router.get('/product', (req, res) => {
//     res.render('product', {products:[], catalog:[]});
// })
module.exports = router;