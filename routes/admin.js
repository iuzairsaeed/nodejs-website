const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// GET
router.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        activeAddProduct: true
    });
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
// POST
router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.title, layout: false });
    res.redirect("/");
});

exports.routes = router;
exports.products = products;