console.log("Hola Ethan desde Node");

//Nos permite acceder y manipular los files de Node
const fileSystem =  require('fs');
//crea un server pequeño
const http = require('http');
const { loadavg } = require('os');

//Escribe en el archivo indicado el segundo parametro
//fileSystem('hola.txt', 'hola de nuevo archivo!')

const server = http.createServer((req,resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.write("Hola Ethan desde un html de Node")
    resp.end();
})

server.listen(3000);