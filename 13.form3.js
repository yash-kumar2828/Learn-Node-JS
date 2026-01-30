const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('html/form.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);

            const name = formData.name;
            const email = formData.email;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <h1>Form Submitted Successfully</h1>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <a href="/">Go Back</a>
            `);
        });
    }

}).listen(2100, () => {
});
