/**
 * Manipulacion del DOM.
 * -Leer y traer nodos del árbol del DOM.
 *  document.getElementById (trae elementos por Id)
 *  document.getElementsByClassName (trae elementos por class)
 *  document.getElementByTagName (trae elementos por etiquetas)
 */

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Traer un strin (texto que vive en mi id)

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la class
console.log(typeof titulos); //Muestra que es un object  por que es una coleccion de arrays

//getElementsByTagName
const tituloh3 = document.getElementsByTagName("h3");
console.log(tituloh3);
console.log(tituloh3[0].innerText);

/**
 * Metodos para llamar elementos mediante selectores de CSS
 * Se usa para proesos mas especificos y la sintaxis querySelector
 *     - document.querySelector("selector"); #,., <>
 *     - document.querySelectorALL() Selecciona elemetnos que se especifiquen
 * Siempre van a tener el primer elemento con el selector indicado
 */

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5858F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación del DOM. CH35";
titulo2.style.color = "#F23D3D";

/**
 * Metodos para crear y agregar elementos en el DOM. Este proceso se divide en dos partes: "crear el nodo y agregar el nodo".
 *      - Crear nodos
 *          * document.createElement("element") Crea elemetnos a partir de etiquetas
 *          * document.createTextNode("text") Crea texto dentro de las etiquetas
 */
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/**
 * - Agregar nodosm mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda el nodo creado
 *      *parentElement.appendChild(const);
 *      *parentElement.append(const);
 *      *parentElement.insertBefore(const);
 *      *parent.Element.insertAdjacentElement(const);
 * Utilizaremos mayormente appendChild
 */
//Obtengo el elemento padre por tag, class o id
const  parentElement = document.getElementById("dif");
//Crear el texto que vivira en el nodo1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto en el nodo1 
nodo1.appendChild(textNodo1);
//Insertar nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla' , sans-serif";
parentElement.style.color = "#A62F03";

//Agregando imagen
//Inserto el imgNodo en el elemento padre para definirlo possteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "https://octodex.github.com/images/femalecodertocat.png";
imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "300";

/**
 * Otra forma de leer y modificar nodos
 *      document.outerHTML (leer)
 *      node.innerHTML (escribir sobre el nodo)
 */
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion del DOM - CH35";