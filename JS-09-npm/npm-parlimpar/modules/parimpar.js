// Creando funcion para determinar si un numero es par o impar
// Necesitamos exportar esta funcion para que pueda ser utilizada en cualquier parte del proyecto solamente llamadno al script. Para ello tenemos que agregar las palabras reservadas `export default`
// Nota: no puede ser funcion flecha 
export default function determinarParImpar(numero) {
    (numero % 2 === 0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} es impar`);
}