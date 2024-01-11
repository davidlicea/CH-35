/* paradigmas de porgramacion

Programacion imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada


Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

Programacion declarativa: Explicar lo que queremos obtener.


Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de onjeto y crear instancias de este tipo de objeto.

class persona {  //clase principal

    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
    //para inicializar un objeto es necesario definir un constructor que tomara a los atributos 
    // clases= molde Objeto = gomita constructor= chefsitx atributos= ingredientes metodos=comportamientos 

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("Bon apetit");
    }//metodo comer

    bailar() {
        console.log("Dale hasta el suelo");
    }//metodo bailar 

    sticker() {
        console.log("Manda sticker");
    }

    fumar() {
        console.log("Parece chimenea");
    }

    liderando() {
        console.log("Lideriando");
    }

    memiando() {
        console.log("Rola meme");
    }

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }
}

let usuario1 = new persona("David", "Licea", 31, "david.rolicea@gmail.com", "55555555");
let usuario2 = new persona("Eunice", "Ceja", 30, "eunice_santos@gmail.com", "55555555");
let usuario3 = new persona("Abigail", "Martinez", 24, "abigail_martinez@gmail.com", "55555555");
let usuario4 = new persona("Baruch", "Moreno", 26, "baruch_moreno@gmail.com", "55555555");
let usuario5 = new persona("Oswaldo", "Zarza", 23, "oswaldo_zarza@gmail.com", "55555555");
let usuario6 = new persona("Karen", "Morales", 26, "karen_morales@gmail.com", "55555555");

console.log(usuario1);
console.log(usuario4.email);
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email, usuario6.email);

usuario5.comer(); //Invocando el metodo
usuario2.fumar();
usuario4.liderando();
usuario5.memiando();
usuario3.sticker();

usuario1.mostrarInfo();
console.log(usuario3.telefono, usuario5.apellido);

//Pilares de la programacion orientada a objetos
/**
 * Herencia
 * Polimorfismo
 * Encapsulamiento
 * Abstracción
 */

//Herencia: Nos permite heredar a clases inferiores para poder optimizar el programa 

class arrendador extends persona {  //subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        console.log("Capacidad ", this.capacidad);
        console.log("Costo ", this.costo);
        console.log("Nombre del lugar ", this.nombreLugar);
    }
}

let arrendador1 = new arrendador("David", "Licea", 27, "david..rolicea@gmail.com", "555555555", 100, 50000, "LaChabela");

console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo();


//Ejemplo 

class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();
gato.sonido();

/**
 * Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulado en comun
 */
class producto {
    
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log("Marca ");
        console.log("Precio ");
    }
}

let producto1 = new producto("cerave", 85);

//Encapsulamiento: Ocultar la implementacion de un objeto y solo mostrar los datos necesarios 


class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
    };
}

//Abstraccion: Traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos


//Los objetos de tipo Json es un formato de intercambio de datos ligero, accesible, estructurado, manipulable(DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejcutan con fetch.
let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}

console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}

console.log(objetoLiteral);

//Principios SOLID
/*
1.- Principio de responsabilidad unica (Single Responsability Principle)
Una clase de tener asignada una tarea o responsabilidad especifica y esta no deberia cambiar
2.- Principio abierto/cerrado (Open/Closed Principle OCP)
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin cambios en la misma
3.- Principio de sustitución de Liskov (Liskov Substitution Principle LSP)
Una clase hijo puede sustituir objetos de una clase padre
4.- Principio de segregacion de interfaces (Interface Segregation Principle ISP)
Delimitar los metedos que necesito y dejar fuera los innecesarios
5.- Principio de inversion de dependencias (Dependency Inversion Principle DIP)


*/

/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */

class Alumno {
    nombre = "";
    calificacion = 0;

    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion(){
       console.log(`Tu calificacion es ${this.calificacion}`);
    }
    
    evaluacion(){
        if(this.calificacion >= 6){
            console.log(`Aprobaste ${this.nombre}`);
        } else{
            console.log(`Reprobaste ${this.nombre}`);
        }
    }
}

let Alumno1 = new Alumno ("Rene", 9);
let Alumno2 = new Alumno ("Abi", 4);
let Alumno3 = new Alumno ("Karen", 10);
let Alumno4 = new Alumno ("Baruch", 10);
let Alumno5 = new Alumno ("Eunice", 2);
let Alumno6 = new Alumno ("Oswaldo", 20);
let Alumno7 = new Alumno ("Montse", 8);
let Alumno8 = new Alumno ("Emiliano", 7);
let Alumno9 = new Alumno ("David", 1);

console.log(Alumno1, Alumno2, Alumno3, Alumno4, Alumno5, Alumno6, Alumno7, Alumno8, Alumno9);
Alumno1.evaluacion();
Alumno1.imprimirCalificacion();
Alumno2.evaluacion();
Alumno2.imprimirCalificacion();