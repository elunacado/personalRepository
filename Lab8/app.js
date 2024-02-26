console.log("Hola Ethan desde Node");

//Nos permite acceder y manipular los files de Node
const fileSystem =  require('fs');
//crea un server pequeño
const http = require('http');
const { loadavg } = require('os');

//Escribe en el archivo indicado el segundo parametro
//fileSystem('hola.txt', 'hola de nuevo archivo!')

const server = http.createServer((req,resp) => {
    if(req.url=="/"){
        resp
    } else if (req.url=="/construir") {
        
    } else {
        resp.statusCode = 404;
        resp.end();
    }
})

server.listen(3000);