/** Ejercicio 1
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * Debe recibir como parametro la edad
 * Consideraciones: utilizar la estructura if-else
 */
let persona = 23;
if (persona >= 18){
    console.log("Puedes votar pero mejor cancela tu voto");
} else{
    console.log("Tas chavo, mejor ve por un gansito");
}

/** Ejercicio 2
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * Debe recibir como parametro un numero, cual sea
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let number = 56;
if (number  % 7 == 0 && number % 8 == 0){
    console.log(true);
} else (console.log(false));

/** Ejercicio 3
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * Debe recibir como parametro un numero aleatorio
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * Consideracion - Utilizar la estructura if-else
 */
function esDivisible(num) {
    if (num % 4 === 0 || num % 9 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}
const numeroAleatorio = Math.floor(Math.random() * 100) + 2;
esDivisible (numeroAleatorio);

/** Ejercicio 4 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * Consideraciones: utilizar la estructura switch
 */
let peliculas = "terror"
switch(peliculas){
    case "acción":
        console.log("Te recomiendo transformers");
    break;
    case "drama":
        console.log("Te recomiendo Django");
    break;
    case "comedia":
        console.log("Te recomiendo Como si fuera la primera vez");
        break;
     case "romance":
        console.log("Te recomiendo Kimi no na wa");
         break;
    case "suspenso":
        console.log("Te recomiendo Old");
        break;
    case "terror":
        console.log("Te recomiendo Hereditary");
        break;
    default:
        console.log("Mejor vete a hacer ejercicio.")
}

/** Ejercicio 5
 * Crear una interfaz de un cajero ATM
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroAutomatico(opcion) {
    if (opcion === 1) {
        console.log("Retirar dinero: Por favor, ingrese la cantidad que desea retirar.");
    } else if (opcion === 2) {
        console.log("Transferencia: Por favor, ingrese los detalles de la transferencia.");
    } else if (opcion === 3) {
        console.log("Depósito: Por favor, deposite el dinero en la ranura designada.");
    } else if (opcion === 4) {
        console.log("Pago de servicios: Seleccione el servicio que desea pagar.");
    } else {
        console.log("Opción no válida. Por favor, seleccione una opción válida (1-4).");
    }
}
cajeroAutomatico(3);

/** Ejercicio 6
 * Escribir en codigo un programa conversor de divisas
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * Consideracion: estructura switch
 */

/*Write a function that takes an integer minutes and converts it to seconds.
*Examples*

    convert(5) ➞ 300
    convert(3) ➞ 180
    convert(2) ➞ 120*/
    function calcSegundos (numero){
        return numero * 60;
    }
    let resultadoSegundos = calcSegundos(5);
    console.log(`La conversión da ${resultadoSegundos} segundos`);

/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*Examples*
    
    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2*/
    function numberPlusOne (numero){
        return numero + 1;
    }
    let resultNumber = numberPlusOne(5);
    console.log(`El resultado es ${resultNumber}`);

/*Write a function that takes the base and height of a triangle and return its area.
*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50*/
    function calcArea(x, y){
        return (x * y) / 2;
    }
    let resultado = calcArea(8, 4);
    console.log(`El área del triangulo es ${resultado}`);

/*Create a function that takes the age in years and returns the age in days.
*Examples*
    
    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300*/
    function calcDays (numero){
        return numero * 365;
    }
    let resultadoDays = calcDays(5);
    console.log(`La conversión da ${resultadoDays} días`);

/*Create a function that takes voltage and current and returns the calculated power.
*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600*/
    function calcPotencia(x, y){
        return (x * y);
    }
    let resultadoPotencia = calcPotencia(8, 4);
    console.log(`La potencia es ${resultadoPotencia}`);

/*Write a function that returns the string "something" joined with a space " " and the given argument a.
*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something"*/
    function word() {
        return "Something";
    }
    console.log(word() + " " + "About Us");

/*Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720*/
    function sumPolygon(n) {
        return (n - 2) * 180;
      }
      console.log(sumPolygon(3));
      console.log(sumPolygon(4)); 
      console.log(sumPolygon(6)); 