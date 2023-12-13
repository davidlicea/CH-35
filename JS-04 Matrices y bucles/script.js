/*Arrays:
Una coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array. 
Los arrays o arreglos utilizan para almacenar y organizar datos de manera mas eficiente.
Crear un Array:
*/
const numeros = [1, 2, 3, 4, 5];
//Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);
//Array mixto
const mixto = ["pluma", 8, true, {nombre: "David"}];
console.log(mixto);
//Array vacio
const lista = [];
console.log(lista);
//agregar elementos a mi array vacio
lista[0] = "Leche";
lista[1] = "Carnde de pollo";
lista[2] = "Espinaca";
lista[3] = "Huevo";
console.log(lista);

//Otra manera de crear los Arrays
const frutas = new Array("manzana", "naranja", "peras", "mandarinas", "uvas");
/*Esta sintaxis se puede emplear en Arrays por que son Objects, es una manera de mandar a llamar a un nuevo objeto de tipo Array*/
console.log(frutas);

//Longitud de un Array
console.log(frutas.length);
//Acceder a los elementos del Array 
console.log(frutas[3]);
console.log(frutas[5]);

//Modificar un elemento del array por el indice 
const cremeria = ["jamon", "salchicha", "queso adobera", "queso cotija", "yogurt"];
console.log(cremeria);
cremeria[2] = "quesillo";
cremeria[4] = "danonino";
console.log(cremeria);

//Arreglo de arreglos
console.log("Arreglo de arreglos");
//Estados: Estado de México, Guadalajara, Yucatan, Sonora, Oaxaca.

//Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

const estados = ["Estado de México", "Guadalajara", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "Torta ahogada", "Panucho", "Dogos", "Tlayuda", "Tacos"];
const menu = [estados, platillos];
console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`);

//Metodos de los arrays
/*
Metodo de cola (queue). Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (Firs-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado.
push
shift
unshift

Metodo de pila (stach). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemto añadido es el primero en ser eliminado.
push
pop
*/

console.log("metodos de arrays");
const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//pop() Eliminar el ultimo elemento del array)
let popch35 = ch35.pop();
console.log(popch35);
console.log(ch35);
//push() Agregar al final 
let pushch35 = ch35.push("Mony");
console.log(ch35);
//shift() quitar el primero del array
let shiftch35 = ch35.shift();
console.log(ch35);
//unshift() Agregar al principio el array
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);
//reverse() Cambia el sentido del ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);

/*Investigar
sort()
forEach()
slice()
splice()
indexOf()
*/

