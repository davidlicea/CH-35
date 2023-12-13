/*
Funciones. Son bloques de codigo con instrucciones que se pueden reutilizar las veces que seas necesarias */

// Funcion que permita saludar
function saludar(){
    console.log("Hola desde una funcion");
}
// Ejecutar la funcion con el nombre de la funcion y los parametros
saludar();

// Hoisting. CAracteristica de una funcion que nos permite unvocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque codigo o despues
// Se invoca en la linea 11 y en la linea 18
function saludar(){
    console.log("Hola invoando la funcion con hoisting")
}
saludar();

// Funciones que retornan algo. Para que una funcion retorne algo (un String, una operaiocnm una variable, etc. Necesitamos indicarle al codigo de la funcion que vamos a retornar mediante la palabra reservada return)
function greeting() {
    return "Hola desde una funcion que retorna";
}
console.log(greeting());

/* Funcion: que retorna y recibe parametros*/
function sumar(x, y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

// Calcular el cuadrado de un número
function calcCuadrado (numero){
    return numero * numero;
}
let resultadoCuadrado = calcCuadrado(5);
console.log(resultadoCuadrado);

// Funciones flecha (Arrow function). Es una manera de declarar una funcion por declaracion, sintetizando codigo y haciendolo mas legible.
// Funcion para calcular el cubo de un numero
const calcCubo = (number) => {
    return number * number * number;
}
let resultadoCubo = calcCubo(3);
console.log(resultadoCubo);

// Funciones anonimas. Son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el interior de una variable, se hace referencia a ellas cada vez que la utilicemos 
// Las funciones anonimas no permiten el hoisting ( no se pueden invocar antes de inicializarlas)
const mensaje = function (){
    return "Este es un mensaje desde una funcion anonima";
}
console.log(mensaje());

// Callbacks. Es pasar una funcion B por parametro a una funcion A, de modo que la funcion A pueda ejecutar esa funcion de forma generica desde su codigo.
// Funcion B 
const functionB = function (){
    console.log("Ejecutando funcion B");
}
// Funcion A que mandara a llamar a la funcion B
const functionA = function(callback){
    callback();
}
functionA(functionB);