/*Operador
Es un signo que especifica que debe efectuar una determinada operacion

Operadores aritmeticos (+, -, *, /, ++, --)
Operadores de asignacion(=)
Operadores logicos (&&, ||, !)
Operadores de comparacion (==, ===, !=, !==, <>, <=, >=)
Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
*/

/*
Operadores aritmeticos
(+) se utiliza para sumar dos numeros
(-) se utiliza para restar dos numeros
(*) se utiliza para multiplicar dos numeros 
(/) se utiliza para dividir dos numeros
(%) el residuo te da el resultado del sobrante en una division
(++) incremetna de 1 en 1 la cantidad 
(--) decrementa de 1 en 1 la cantidad
*/
//Suma
let numero1 = 10;
let numero2 = 8;
suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
incremento = numero1;
incremento++;
decremento = numero2;
decremento--;

let precioReal = 1000;
let porcentaje = 20;
let cantidadDescuento = (precioReal * porcentaje) / 100;
let precioDescuento = precioReal - cantidadDescuento;
console.log("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento:" + porcentaje + "%");
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioDescuento);

//Operadores de asignación
//let fruta = manzana;
//Operadores de comparación
let numero3 = 10;
let texto = "10";
console.log(numero3 == texto);
console.log(numero3 === texto);//estrictamente iguales

//(!=) Desigualdad o distinto este operador veritfica si dos valores no son iguales y de ser necesario realiza la conversion
let precioCaja = 1499;
let precioMaximo = 1500;
if (precioCaja != precioMaximo) {
    console.log("El precio del producto no es igual al precio maximo");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}
//(!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor.
let numero7 = 41;
let numero8 = 50;
if (numero7 !== numero8){
    console.log("Los valores son diferentes");
}else{
    console.log("Los valores son iguales");
}
//(>) nos indica si un valor es mayor que otro 
let puntuacionFinal = 85;
let puntuacuonRequerida = 102;
console.log(puntuacionFinal > puntuacuonRequerida);
//(<) nos indica que si un valor es menor que otro 
let anios = 20;
let edadLimite = 30;
console.log(anios < edadLimite);
//(>=) nos indica si un valor es mayor o igual que otro 
let edad = 18; 
let edadNecesaria = 18; 
console.log(edad >= edadNecesaria);
//(<=) nos indica si un valor es menor o igual que otro 
let temperatura = 14; 
let temperaturaMaxima = 21; 
console.log(temperatura <= temperaturaMaxima);
/*
Ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro

let valor1 = prompt ('Ingresa un numero');
let valor2 = prompt ('Ingresa otro numero');
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
if (valor1 === valor2){
    console.log("Los dos numeros que ingresaste son iguales");
} else if (valor2 < valor1){
    console.log('valor2 es menor al valor1');
}else {
    console.log('el valor 1 es mayor al valor 2');
}/*
/*
Ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
 
let palabra1 = prompt("Ingrese una palabra");
let palabra2 = prompt("Ingresa otra palabra");
if(palabra1 === palabra2) {
  console.log("Las palabras son iguales");
} else {
  console.log("Las palabras son diferentes");
}*/
//Operadores logicos 
//(&&) AND se utilizan cuando las dos condiciones deben cumplirse 
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;
if(mayoriaDeEdad >= 18 && tieneIdentificacion){
    console.log("Puedes rentar el salón");
} else{
    console.log("No lo puedes rentar");
}
//(||) OR se utiliza cuando se debe cumplir una condicion u otra
let esPrime = false;
let descuentoC = true;
if(esPrime || descuentoC){
    console.log("Califica para descuento");
} else{
    console.log("No aplica para descuento");
}
//(!) NOT se utiliza para negar el valor de una condicion 
let esDiaLibre = false;
if(!esDiaLibre){
    console.log("Se trabaja");
} else{
    console.log("Descansito");
}
//Operadores de cadena 
//toLowerCase hace el cambio de nuestro string a minusculas
let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);
//toUpperCase hace el cambio de nuestro string a mayusculas
let saludo = "Casi viernes, casi Navidad";
let cambioMayusculas = saludo.toUpperCase();
console.log(cambioMayusculas);
//trim quita los espacios al inicio y al final
let aviso = "    Ch35    Rifa    "
let sinEspacios = aviso.trim();
console.log(sinEspacios);
//toString convierte un tipo de dato number en string
let numero10 = 31;
let cadenas = numero10.toString();
console.log(cadenas);
//concat
let nombre = "David";
let apellido = "Licea";
let nombreCompleto = nombre.concat(" ",apellido);
console.log(nombreCompleto);
/*Expresiones
expresion aritmetica
let operacion = 14 + 25 * 12; combina la suma con la multiplicacion
expresiones de cadenas 
let notificacion = "Casi," + "Anio nuevo"; expresion concatenada
expresion logica 
let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion 
expresion de asignacion
let frasco = chocolates; asigna el valor a la variable
*/
const harina = 500;
const leche = 350;
const huevo = 2;
const mantequilla = 20;

const harinaDisponible = 1000;
const lecheDisponible = 1000;
const huevosDisponibles = 3;
const mantequillaDisponible = 15;

if (
  harinaDisponible >= harina &&
  lecheDisponible >= leche &&
  huevosDisponibles >= huevo &&
  mantequillaDisponible >= mantequilla
) {
  console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
} else {
  console.log(
    "No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta."
  );
}