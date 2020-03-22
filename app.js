// Core modules
const http = require('http');
// custom modules / files
// const routes = require('./routes');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//     console.log('This always Run');
//     next();
// });

app.use('/add-product', (req, res, next) => {
    console.log('In anoher middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Product Title"><input type="submit" value="Submit"></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log('In / middleware');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);