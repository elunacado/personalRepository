/*
console.log("Hola Mundo");
console.info("Esto es info!")
console.warn("Esto es un CUIDADO");
console.error("Esto es un ERROR");

//variables, constantes
//Forma antigua de declarar varibles
var nombre = "Ethan";

//Forma moderna y mas segura
let precio = 12.54;

//Constantes
const stock = 34;

//funcion moderna
const saludo = (nombre) => {console.log("Hola " + nombre)};
saludo(nombre)

const perros =['Mila', 'Luna', 'Trufa'];
const perros2 = new Array();

perros.push('Loki')

console.log(perros);

//forma optimizada de recorrer arreglos
//si usamos of imprime los nombres de los perros
//si usamos in imprime el indice
for(let posicion of perros){
    console.log(posicion)
}

//Objeto
const peleador = {altura: 1.80, peso: 80}
peleador.record = 10;
console.log(peleador);

for (let atributo in peleador){
    console.log(atributo);
}
*/

//Lab 4
function generateNumberString(num) {
    let result = "";
    for (let i = 0; i <= num; i++) {
      iSquared = i*i;
      iCubed= i*i*i;  
      result += i.toString() + ' cuadrado =  ' + iSquared.toString() + ' cubico= ' + iCubed.toString()+', ';
    }
    console.log(result);;
}

  function randomNumber() {
    let randomNumber = Math.random();
    let min = 1;
    let max = 10;
    let randomNumInRange = Math.floor(randomNumber * (max - min + 1)) + min;
    return randomNumInRange;
}


//Ejercicio 1

//const num = prompt("Ingresa un numero para el ejercicio 1")
//generateNumberString(num)


//Ejercicio 2
/* 
rand1=randomNumber();
rand2=randomNumber();
res=rand1+rand2;


let startTime = new Date().getTime(); 
userAnswer=prompt("Dime la suma de los siguientes numeros" + rand1.toString() + " + " +rand2.toString() );
let endTime = new Date().getTime();

let elapsedTime = endTime - startTime; // Calcula el tiempo transcurrido
console.log("El prompt estuvo abierto durante " + elapsedTime / 1000 + " segundos."); // Muestra el tiempo en segundos


if (userAnswer == res.toString()) {
    console.log("Correcto!");
} else { console.log("Incorrecto");}
*/


//Ejercicio 3
