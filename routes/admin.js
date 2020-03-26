const path = require("path");

const express = require("express");

// const rootDir = require("../util/path"); // FOR HTML ROUTE
const productsController = require("../controllers/products");

const router = express.Router();

// const products = [];

// GET
router.get("/add-product", productsController.getAddProduct);

// router.get(
//     "/add-product",
//     res.sendFile(path.join(rootDir, "views", "add-product.html"))
// );

// POST
router.post("/add-product", productsController.postAddProduct);
// router.post("/add-product", (req, res, next) => {
//     products.push({ title: req.body.title, layout: false });
//     res.redirect("/");
// });

// exports.routes = router;
module.exports = router;