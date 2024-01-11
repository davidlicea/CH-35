/**
 * Para manipular la informacion de un usuario necesito crear un perfil mediante un objeto de javascript. 
 */

const user = {
    username: 'davidlicea',
    age: '27',
    email: 'david.rolicea@gmail.com',
    favfilms: ["Interestellar", "Se7en", "Mindhunter", "Mean Girls", "Shrek"]
}

//Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) =>{
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*mostrando elementos de lista en forma de lista
    Para mostrar el array en forma de lista utilizaremos un ciclo for each para recorrer todo el array y traer cada elemento a la lista 
    */ 
   const ul = document.getElementById("fav-films");
   user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
   });
   //modificando estilos de la ul para quitar viñetas
   ul.style.listStyle = "none";
   ul.style.padding = "0";
   ul.style.color = "#D9B70D";

    //mostrando elementos de lista en forma de fila 
    //document.getElementById("fav-films").textContent = user.favfilms;
}

//Invocando la función 
createUser(user);

/**
 * Eventos para actualizar el username mediante el input y el boton
 */

const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})