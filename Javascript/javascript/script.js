// Comentarios de una sola linea

/*comentarios 
multilinea*/

//alert("Hola mundo");

//console.log("Este es un mensaje para mi consola")

/*var nombre = prompt("Ingresa tu nombre")
alert("Hola, " + nombre + " Bienvenido a la CH35");*/

/*var numero1 = parseInt(prompt("Ingresa el primer número:"));
var numero2 = parseInt(prompt("Ingresa el segundo número"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("División:" + (numero1 / numero2));*/

// Solicitar al usuario que ingrese su edad
var edad = prompt("Por favor, ingresa tu edad:");

edad = parseInt(edad);

if (edad < 18) {
    alert("Tas chavo.");
} else {
    alert("Mejor ve por ibuprofeno.");
}
