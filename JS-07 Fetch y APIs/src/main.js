/*Programacion sincronica 
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("******************");*/

/*Programacion asincrona. setTimeout que recibe una función anonima y establece un tiempo (en milisegundos donde 1000ms es = a 1 seg) de ejecucion para cuplor con la condicion de asincronismo 
const twoAsync = () => {
    setTimeout( () => {
    console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function () {
    console.log("uno Async");
    }, 2000)
    twoAsync();
    console.log("tres Async");
}

oneAsync();*/

//Trabajando con promesas medainte Fetch API
const url = "https://jsonplaceholder.typicode.com/users"

//Usando fetch 
fetch(url)
    //Si se cumple la promesa vamos a traer los datos de la API y se convertiran en tipo json para poder mostrarlos en consola 
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuarios de la API
        console.log(data[4].name); //Mostrando en cosnsola el usuario con el indice y trayendo solamente su nombre 
    })
    .catch(error => console.error("¡Upsis!, algo salio mal", error));