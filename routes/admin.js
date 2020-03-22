const express = require('express');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    console.log('In anoher middleware');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title" placeholder="Product Title"><input type="submit" value="Submit"></form>'
    );
});
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;