// Core modules
const http = require('http');
// custom modules / files
// const routes = require('./routes');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// app.use('/', (req, res, next) => {
//     console.log('This always Run');
//     next();
// });

const server = http.createServer(app);

server.listen(3000);