const fileSystem = require('fs');
const http = require('http');
const qs = require('querystring'); // Import the 'querystring' module

const header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taqueria</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
`

const footer = ` </body>
        <script>
        // Add event listener to the button
        document.getElementById('goBack').addEventListener('click', function() {
            window.location.href = "/";
        });
        </script>
        </html>`

const server = http.createServer((req, resp) => {
    if (req.url === "/") {
        resp.write(header)
        resp.write('<h1 class="title"> Bienvenido a la taqueria ¿De que quiere?</h1>')   
        resp.write(footer)
        resp.end();
    } else if (req.url === "/pastor") {
        resp.write(header)
        resp.write(    
        `
            <h1 class="title">Salen dos de pastor con piña</h1>
            <button class ="button" id="goBack">Go Back</button>
        `);
        resp.write(footer);
        resp.end();
    } else if(req.url === "/orden" && req.method === "GET") {
        resp.write(header)
        resp.write(
            `
                    <h1>¿De que sera su orden?</h1>
                    <form id = "ordenForm" method = "POST"> <!-- Changed the id to 'ordenForm' -->
                        <input type="text" name="orden"></p> <!-- Changed 'textbox' to 'text' -->
                        <button id="prepararBtn">Preparar</button> <!-- Changed the id to 'prepararBtn' -->
                    </form>        
            `);
        resp.write(footer)
        resp.end();
    } else if (req.url == "/orden" && req.method == "POST"){
        let data = '';
        req.on('data',(chunk) => {
            data += chunk.toString()
        });
        req.on('end', () =>{
            const formData = qs.parse(data);
            const orden = formData.orden;
            fileSystem.appendFile('ordenes.txt', orden + '\n', (err) => { // Guardamos la orden en un archivo
                if (err) throw err;
                console.log('Orden guardada correctamente.');
            });
            resp.statusCode = 302; // Redireccionamos al usuario después de enviar la orden
            resp.setHeader('Location', '/'); // Redireccionamos al inicio
            resp.end();
        });
        
    } else {
        resp.statusCode = 404;
        resp.write(header)
        resp.write(
            `<h1 class = "title">404: No hay tortillas joven</h1>`
        );
        resp.write(footer)
        resp.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
