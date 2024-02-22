console.log("Hola Ethan desde Node");

//Nos permite acceder y manipular los files de Node
const fileSystem =  require('fs');

//Escribe en el archivo indicado el segundo parametro
fileSystem('hola.txt', 'hola de nuevo archivo!')