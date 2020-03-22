const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // // process.exit();
    // const url = req.url;
    // const method = req.method;
});

server.listen(3000)