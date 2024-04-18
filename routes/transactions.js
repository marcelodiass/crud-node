const {getProducts, addProduct} = require('../controllers/productController')

const router = require('express').Router();

router.get('/get-products', getProducts)
    .post('/add-product', addProduct)

module.exports = router;