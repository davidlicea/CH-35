console.log("Hola CH-35");
/*Control de flujo y estructuras de control 
Las estructuras de control son un componente fundamental dentro de la programacion, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 */

/*Declaracion de sentencia if-else
Palabra reservada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar la exresion logica, se abren y cierran llaves para indicar que sentencia va a ejecutar si la condicion se cumple, despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un () simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla.
*/
let n = 15;
if (n > 10){
    console.log(true);
} else {
    console.log(false);
}

/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

//if anidados
let edad = 28;
if (edad < 18){
    console.log("Eres menor de edad retirate");
} else if (edad >= 18 && edad < 65){
    console.log("Eres un adulto joven");
} else{
    console.log("Eres un adulto mayor");
}

/*
Sentencia switch
La sentencia switch es otro tipo de estructura de ccontrol de flujo quem nuevamente se encuentra en diversos lenguajes de programación
Es bastante parecida a al asentencia if else, pero sera diferente en cuanto comportamiento, ya que no se basa en una bifurcacion, sino que se secciona en multiples casos que, dependiendo de la expresion que cumpla con un caso especifco, sera la secuencia que se va a ejecutar dentro de la declaracion 

Declaracion: Se empieza por colocar la palara reservada switch, seguido de parentesis() donde se debe colocar el valor que va a indicar que sentencia/caso a ejecutar
Falta indicar el bloque de codigo que se limita esta sentencia, como lo haciamos en la sentencia if o con las funciones 
Dentro de este bloque de codigo falta colocar las cosas pra cada valor que se desee, estableces segun sea el valor indicado dentro de el parentesis ()
Cada uno de estos casosse separa del siguiente numero:
case calor : insrtuccion a ejecutar si el valor empata con este caso
Despues, para indicar que la ejecucion de las sentencias debe cortarse cuando se cumpla se coloca la instruccion break
Cuando terminemos de establecer los caso que necesitemos declarar dentro de nuestra sentencia debemos colocar un valor por defecto default
Esta ultima sentencia nos permite establecer un valor por defecto si es que esta valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos default: mensaje no disponible
*/

let dia = "martes";
switch(dia){
    case "lunes":
        console.log("Odio los lunes");
        break;
    case "martes":
        console.log("Dominos 2x1");
        break;
    case "miercoles":
        console.log("Toca presentar proyecto");
        break;
    case "jueves":
        console.log("Viernes chiquito");
        break;
    case "viernes":
        console.log("viernes pero a que costo");
        break;
    case "sabado":
        console.log("Sabado de trapear con rolitas de mi jefesita");
        break;
    case "domingo":
        console.log("De flojera");
        break;
    default:
        console.log("Dia desconocido");
        break;
}
 /*Oerador ternario
 Expresion condicional if-else mas simple y legible. Principlamente se usa para simplificar condiciones de una sola expresion, tembien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver conduso y poco legible.
 Sudeclaracion es la siguiente:
 var, let o const:Se le asigna un nombre como si se tratara de una variable operador de asignacion "", seguido de este operador, hay que colocar un aexpresion logica, esto va dentro de un parentesis (), Despues hay que colocar este caracter ? que indica el camino a seguir, dependiendo de si, se cumple o no la expresion. 
 Para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
 Se se cumple la condicion, del lado derecho se coloca la sentencia a ejecutar
*/

//Ejemplo de operador ternario
let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

/*Cuando usar if-else y cuando usar switch
if-else: cuando necesitemos tomar deciciones bajo condiciones mas flexibles
switch: Cuando tenemos un conjunto dijo de valores para comparar una expresion
*/
