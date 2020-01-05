var express = require('express');
var router = express.Router();
const passport = require('passport');

var homeControllers = require('../controller/home-controllers');
var productControllers = require('../controller/product-controllers');
var orderControllers = require('../controller/order-controllers');
var userControllers = require('../controller/user-controllers');
var storeControllers = require('../controller/store-controllers');
const upload = require('../uploadMiddleware');



/* GET home page. */
router.get('/', homeControllers.index);

router.get('/home', homeControllers.index);

// Product
router.get('/product', productControllers.displayProducts);
router.post('/product/edit', productControllers.editProduct);
router.post('/product/add',upload.single('image'), productControllers.addProduct);

// Category
router.get('/category', productControllers.displayCategory);

// Order
router.get('/order', orderControllers.displayOrder);

// Customer
router.get('/user', userControllers.displayUser);
router.post('/user/edit', userControllers.editUser);
router.get('/user/autho', userControllers.AuthoUser);
router.get('/user/delete/:id', userControllers.deleteUser);


// Store
router.get('/store', storeControllers.displayStore);
router.post('/store/add',upload.single('image'), storeControllers.addStore);
// router.post('/store/edit', upload.single('image'),storeControllers.editStore);
router.get('/store/delete/:id', storeControllers.deleteStore);

module.exports = router;
