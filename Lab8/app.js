const fileSystem = require('fs');
const http = require('http');

const server = http.createServer((req, resp) => {
    if (req.url === "/") {
        resp.write(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Bienvenido a la taqueria ¿De que quiere?</h1>
            </body>
            </html>`
        );
        resp.end();
    } else if (req.url === "/pastor") {
        resp.write(
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Salen dos de pastor con piña</h1>
            </body>
            </html>`);
        resp.end();
    } else {
        resp.statusCode = 404;
        resp.write(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>404: No hay tortillas joven</h1>
            </body>
            </html>`
        );
        resp.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
