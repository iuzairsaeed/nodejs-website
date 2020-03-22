const fs = require('fs');

if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Mesasages</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>');
    res.write('</html>');
    return res.end();
}
if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            // fs.writeHead(302, {});
            return res.end();
        });
    });
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My node js Page</title></head>');
res.write('<body><h1>My node js Page</h1></body>');
res.write('</html>');
res.end();