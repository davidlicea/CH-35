// Escribe tu código aquí.

//Ejercicio 1

const miArray = ["perro", "gato", "vaca", "hamster", "conejo", "caballo"];
const animalitos = (palabra, conjunto) => {
  return conjunto.filter((word) => word.length > palabra.length);
};
const resultado = animalitos("vaca", miArray);
console.log(resultado);

//Ejercicio 2

function printArrayInHTML(conjunto) {
  const ulElement = document.getElementById("miLista");
  if (ulElement) {
    ulElement.innerHTML = "";
    conjunto.forEach((palabra) => {
      const liElement = document.createElement("li");
      liElement.textContent = palabra;
      ulElement.appendChild(liElement);
    });
  } else {
    console.error(
      'No se encontró el elemento <ul> con el id "miLista" en el HTML.'
    );
  }
}


//Bonus

function procesarEntrada() {
    const inputPalabra = document.getElementById('inputPalabra');
    const palabraUsuario = inputPalabra.value;
  
    const resultado = animalitos(palabraUsuario, miArray);
  
    printArrayInHTML(resultado);
  }

  const botonProcesar = document.getElementById('botonProcesar');
botonProcesar.addEventListener('click', procesarEntrada);