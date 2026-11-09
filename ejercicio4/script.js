function agregarTarea() {
    const input = document.getElementById('nueva-tarea');
    const textoTarea = input.value;
    const errorMsg = document.getElementById('error-msg');
    const lista = document.getElementById('lista-tareas');

    // Validación de espacios vacíos
    if (textoTarea.trim() === '') {
        errorMsg.style.display = 'block';
        return;
    }
    
    errorMsg.style.display = 'none';

    // Crear elementos del DOM
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Evento para tachar la tarea
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completada');
        } else {
            li.classList.remove('completada');
        }
    });

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea;
    spanTexto.style.flexGrow = '1';

    // Botón eliminar (Reto opcional)
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn-delete';
    btnEliminar.addEventListener('click', function() {
        lista.removeChild(li);
    });

    // Ensamblar la lista
    li.appendChild(checkbox);
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);

    // Limpiar input
    input.value = '';
    input.focus();
}

// Permite agregar presionando Enter
document.getElementById('nueva-tarea').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') agregarTarea();
});