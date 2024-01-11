const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//REGEX: expresiones regulares. Determinan patrones que se deben cumplir 
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Deshabilitar el boton
submitButton.disabled = true;

/**
 * Evento para input, el cual evaluara el patron de expresion regular y en caso de cumplir con el patron, habilitara el boton y podremos ser redirigidos a la pagina index.html.
 * -Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena la variable (text).
 * -Se evalua la REGEX 
 */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    }else submitButton.disabled = true;
});


