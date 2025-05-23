const form = document.getElementById('complaintForm');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const reclamoInput = document.getElementById('reclamo');
const nombreError = document.getElementById('nombreError');
const correoError = document.getElementById('correoError');
const reclamoError = document.getElementById('reclamoError');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir envío del formulario por defecto

    let isValid = true;

    if (nombreInput.value.trim() === '') {
        nombreError.classList.add('show');
        isValid = false;
    } else {
        nombreError.classList.remove('show');
    }

    if (correoInput.value.trim() === '') {
        correoError.classList.add('show');
        isValid = false;
    } else {
        correoError.classList.remove('show');
    }

    if (reclamoInput.value.trim() === '') {
        reclamoError.classList.add('show');
        isValid = false;
    } else {
        reclamoError.classList.remove('show');
    }

    if (isValid) {
        // Manejar el envío del formulario aquí (ej. llamada AJAX)
        alert('Formulario enviado! (Recuerda que esta es solo validación del lado del cliente).');
        form.reset(); //Limpiar el formulario después del envío
    }
});