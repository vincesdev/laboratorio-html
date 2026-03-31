// 1. Seleccionamos el formulario del HTML
const formulario = document.querySelector('form');
const contenedorMensaje = document.getElementById('mensaje-confirmacion');

// 2. Escuchamos cuando el usuario haga clic en "Reservar cita"
formulario.addEventListener('submit', function(event) {
    
    // Evitamos que la página se recargue y se pierdan los datos
    event.preventDefault();

    // 3. Capturamos los valores que el usuario escribió
    const nombre = document.getElementById('nombre').value;
    const variedad = document.getElementById('variedad').value;
    const edad = document.getElementById('edad').value;

    // 4. Validamos que el nombre no esté vacío (aunque HTML ya ayuda)
    if (nombre.trim() === "") {
        alert("Por favor, dinos el nombre de tu Poodle.");
        return;
    }
    // 2. En lugar de alert(), usamos el div
    document.getElementById('nombre-confirmacion').textContent = nombre;
    document.getElementById('variedad-confirmacion').textContent = variedad;
    document.getElementById('edad-confirmacion').textContent = edad;
    contenedorMensaje.className = "mensaje-exito";


    // 6. Limpiamos el formulario para una nueva reserva
    formulario.reset();
});