const { Router } = require('express');
const router = Router();

const routerUser = require("./routerUser");
const routerProduct = require("./routerProduct");
const routerAdmin = require("./routerAdmin");
const routerReview = require("./routerReview");
const routerPurchase = require("./routerPurchase");
const routerCategory = require("./routerCategory");

router.use('/user', routerUser);
router.use('/product', routerProduct);
router.use('/admin', routerAdmin);
router.use('/review', routerReview);
router.use('/purchase', routerPurchase);
router.use('/category', routerCategory);


module.exports = router;