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
console.log("División:" + (numero1 / numero2));

var edad = prompt("Por favor, ingresa tu edad:");

edad = parseInt(edad);

if (edad < 18) {
    alert("Tas chavo.");
} else {
    alert("Mejor ve por ibuprofeno.");
}
*/

//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia 
var tiene un alcance global 
let tiene un alcance local
const se mantiene sin ningun cambio*/

/*string: cadena de texto (Lleva commillas)
number: numero 
boolean: true/false
undefinied: no asignado o definido
objects (Objects)
Objects (Arrays)

let nombre = "Daniel";
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 24;
let invitadxEspecial = null;
let horaDeSalida = undefined;

document.write(nombre);

//typeof palabra reservada para saber que tipo de variable tenemos 

console.log(typeof(nombre));

let funcionNumber = console.log(typeof Number (nombre));

metodoParseInt = console.log(typeof parseInt (nombre));

metodoParseFloat = console.log(typeof parseFloat(nombre));*/

/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en numeros

// Conversión de number a string

console.log(typeof String(edad));
console.log(typeof edad.toString());

// Conversión de Boolean 

let numero = Number (esMayorEdad);

console.log(numero)

let texto = String (esMayorEdad);

console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());*/

/*Encasillamiento:
Nos es util para el mantenimiento del código ya que lo hace mas legible y facil de entender
prevencion de errores para reducir la probabilidad de los mismos 
mejora el rendimiento de nuestro programa

let numero = 15;
let texto = "Hola";

// Con encasillamiento

let numeroEncasillado = number = 15;
let textoEncasillado = string = "Hola";*/

/* Concatenar basicamente es unir strings 

let saludo = "Hola humanx ";
let frase = "el futuro es hoy";

texto = saludo + frase;
document.write(texto);

let harina = parseInt ("150");
let huevo = toString(1);
let mantequilla = parseInt("5");
let leche = parseInt("500");

let nutella = 50;
let nutellatoString = nutella.toString();
console.log(typeof(nutellatoString));
console.log(nutella);*/
//console.log(typeof (toString(nutella)));

/*console.log(typeof(harina));
console.log(typeof(huevo));

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
let pasoDos = "<br> Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
let pasoTres = "<br> Paso 3: Posteriormente, sirve la mezcla de masa para jokeis al centro del sarten dejandola caer suavemente. ";
let pasoCuatro = "<br> Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "<br> Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario.";
let pasoSeis = "<br> Paso 6: Finalmente, sirve y disfruta.";

let texto = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
document.write(texto);

textoDos = "Esto es " + nutella;
document.write(textoDos);
*/

/* console.log(): Nos permite visualizar en consola del navegador el codigo de JS.
console.warn(): Muestra un mensaje de advertencia.
console.error(): Muestra un mensaje de error
console.table(): 
*/

let firstName = "David";
let lastName = "Licea";
let age = 27;

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/*ECMAScript 6 (ES6). INtegracion de cadenas
>- backticks ``
>- Para variables ${variable}
>- Texto para string
*/

console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age}`);

// console.warn()
console.warn(`Precaución, no es buena practica dejar sin punto y coma`);
//console.error()
console.error(`Status 404: Failed`);

/* Array: Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS en el cual se almacena una coleccion de elementos de manera ordenada.
Los arrays se pueden manipular mendiante metodos especificos 
Los elementos de un array se contabilizan como indices por lo cual el primer elemento del array posee el indice 0.
Un array posee n cantidad de elementos
Se declara como variables, seguido del signo igual y corchetes
Dentro de cada corchete vive un elemento con un tipo de dato 
*/

let arreglo1 = []; // Array vacio
console.log(`Array vacio ${arreglo1}`);
//Los elemento de un array se separan mediante comas
let cars = ["Volkswagen", "BMW", "Mazda", "KIA"]; // Array de String
console.log(cars);
//Longitud e indice son diferentes. La longitud(length) es el numero de elementos y el indice corresponde a cada elemento a partir del 0.
console.log(typeof (cars)); //Output: object

//Array de Numbers
let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMxn.length); // Output: 12

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves o claves y valores 
Su sintaxis es la siguiente: 
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    } 
Los objetos pueden almacenar diferente tipos de valores. 
*/

const employee = {
    firstName: "David",
    lastName: "Licea",
    age: 29,
    country: "México"
}

console.log(employee);
//Mostrando mi array como tabla
console.table(cars);
// Mostrando objeto como tabla
console.table(employee);


