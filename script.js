// 1. Seleccionamos el formulario del HTML
const formulario = document.querySelector('form');
const contenedorMensaje = document.getElementById('mensaje-confirmacion');
const selectVariedad = document.getElementById('variedad');
const imagenPoodle = document.getElementById('poodle-dinamico');
const captionPoodle = document.getElementById('caption-dinamico');

const infoPoodles = {
    'gigante': {
        src: 'img/Pgigante.jpeg',
        text: 'Poodle Gigante: Elegancia en gran tamaño.'
    },
    'mediano': {
        src: 'img/Poodle.jpeg',
        text: 'Poodle Mediano: El equilibrio perfecto.'
    },
    'miniatura': {
        src: 'img/Pminiatura.jpeg',
        text: 'Poodle Miniatura: Pequeño pero activo.'
    },
    'toy': {
        src: 'img/Ptoy.jpeg',
        text: 'Poodle Toy: El consentido de la casa.'
    },
    '': { // Opción por defecto
        src: 'img/principal.jpeg',
        text: 'Poodle estándar mostrando su corte distintivo'
    }
};

// 3. Escuchamos el evento 'change' (cuando cambian la selección)
selectVariedad.addEventListener('change', function(event) {
    // Obtenemos el valor seleccionado ('gigante', 'toy', etc.)
    const variedadSeleccionada = event.target.value;
    const info = infoPoodles[variedadSeleccionada];

    imagenPoodle.style.opacity = 0;

    setTimeout(() => {
        imagenPoodle.src = info.src;
        imagenPoodle.alt = `imagen de poodle ${variedadSeleccionada}`;
        captionPoodle.textContent = `Figura 1: ${info.text}`;
        imagenPoodle.style.opacity = 1;
    }, 400);

});

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