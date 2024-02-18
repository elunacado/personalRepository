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
function randomNumber() {
    let randomNumber = Math.random();
    let min = 1;
    let max = 10;
    let randomNumInRange = Math.floor(randomNumber * (max - min + 1)) + min;
    return randomNumInRange;
}

function posAndNeg(array) {
    let pos = 0;
    let neg = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element < 0){
        neg++;
    }else{
        pos++;
    }
}
let answer = 'Los numeros positivos son: '+ pos + '. Los numeros negativos son: ' + neg;
return answer;
}

function promedio(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;

    }
    return sum;
    
}

function inverse(num){
    let numString = num.toString();
    let numVolteado = numString.split('').reverse().join('');
    let result = parseInt(numVolteado);
    return result;
}


//Ejercicio 1
/*
// Solicitar al usuario un número con un prompt
const numero = prompt("Ingrese un número:");

// Verificar si la entrada es válida

// Comenzar la tabla
document.write("<table>");
document.write("<thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead>");
document.write("<tbody>");

// Generar los números, cuadrados y cubos
for (let i = 1; i <= numero; i++) {
    const cuadrado = i * i;
    const cubo = i * i * i;
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + cuadrado + "</td>");
    document.write("<td>" + cubo + "</td>");
    document.write("</tr>");
}

// Finalizar la tabla
document.write("</tbody>");
document.write("</table>");
*/

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
/* 
const array = [-1, 3, -5, 8,-10, 6, 15, -15, -6, -2]
console.log(posAndNeg(array));
*/

//Ejercicio 4
/*
arrayExercise2 = [1,2,3,4,5,6,7,8,9,10]
console.log(promedio(arrayExercise2))
*/

//Ejercicio 5
/* 
    let num = 987654321;
    console.log(inverse(num));

*/

//Ejercicio 6
const ventasPropias = prompt('Ingresa la cantidad de malangas que tu vendes')
const ventasAjenas = prompt('Ingresa la cantidad de malangas que vende tu socio')
const ventasDeNegocio = prompt('Ingresa la cantidad de malangas que vende el negocio al que le distribuyes')

const ventasTotales = parseInt(ventasAjenas)+parseInt(ventasDeNegocio)+parseInt(ventasPropias);

const porcentajeDeVentasPropias = (ventasPropias*100)/ventasTotales;
const porcentajeDeVentasAjenas = (ventasAjenas*100)/ventasTotales;
const porcentajeDeVentasNegocio = (ventasDeNegocio*100)/ventasTotales;

document.write("<table>");
document.write("<thead><tr><th>Vendedor</th><th>Ventas Realizadas</th><th>Porcentaje que representa del negocio</th></tr></thead>");
document.write("<tbody>");


document.write("<tr>");
document.write("<td>" + 'ventasPropias' + "</td>");
document.write("<td>" + ventasPropias + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasPropias) + '%' + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + 'ventasDeSocios' + "</td>");
document.write("<td>" + ventasAjenas + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasAjenas) + '%' + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + 'ventasDeOtrosNegocios' + "</td>");
document.write("<td>" + ventasDeNegocio + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasNegocio) + '%' +"</td>");
document.write("</tr>");


// Finalizar la tabla
document.write("</tbody>");
document.write("</table>");
