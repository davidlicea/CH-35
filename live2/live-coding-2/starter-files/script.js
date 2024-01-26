// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

document.addEventListener('DOMContentLoaded', function () {
    // Agrega la función fetchAnswer a un eventListener
    document.getElementById('button').addEventListener('click', fetchAnswer);
});

// Función para realizar la petición al API y mostrar la respuesta
async function fetchAnswer() {
    const question = document.getElementById('input').value;
    const answerContainer = document.getElementById('answer');
    const errorContainer = document.getElementById('error');

    // Verifica que se haya ingresado una pregunta
    if (!question.trim()) {
        errorContainer.textContent = 'Por favor, ingresa una pregunta.';
        return;
    }

    // Realiza la petición al API
    try {
        // Limpia mensajes de error previos
        errorContainer.textContent = '';

        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json();

        // Muestra la respuesta en el HTML
        answerContainer.textContent = `Respuesta: ${data.answer}`;

        // Limpia la pregunta y la respuesta después de 5 segundos
        setTimeout(() => {
            document.getElementById('input').value = '';
            answerContainer.textContent = '';
        }, 5000);
    } catch (error) {
        console.error('Error al consultar el API:', error);
        errorContainer.textContent = 'Error al consultar el API.';
    }
}

// Función para manejar la tecla Enter
function handleKeyEnter(event) {
    if (event.key === 'Enter') {
        fetchAnswer();
    }
}
