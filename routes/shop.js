const path = require("path");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

const productsController = require("../controllers/products");

const express = require("express");

const router = express.Router();

router.get("/", productsController.getProducts);
// router.get("/", (req, res, next) => {
//     const products = adminData.products;
//     res.render("shop", {
//         prods: products,
//         pageTitle: "Shop",
//         path: "/",
//         hasProducts: products.length > 0,
//         activeShop: true,
//         productCSS: true
//     });
//     // console.log(adminData.products);
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

module.exports = router;