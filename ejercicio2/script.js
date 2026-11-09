function verificarPassword() {
    const pass = document.getElementById('password').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Elementos del DOM para las reglas
    const ruleLength = document.getElementById('rule-length');
    const ruleDigit = document.getElementById('rule-digit');
    const ruleSpace = document.getElementById('rule-space');
    const finalMessage = document.getElementById('final-message');

    // 1. Comprobar longitud (mínimo 8 caracteres)
    let hasLength = pass.length >= 8;
    actualizarRegla(ruleLength, hasLength, "Al menos 8 caracteres");

    // 2. Comprobar al menos un dígito (0-9) mediante ciclo
    let hasDigit = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= '0' && pass[i] <= '9') {
            hasDigit = true;
            break;
        }
    }
    actualizarRegla(ruleDigit, hasDigit, "Al menos un dígito (0-9)");

    // 3. Comprobar que esté libre de espacios
    let noSpaces = !pass.includes(' ');
    actualizarRegla(ruleSpace, noSpaces, "Sin espacios en blanco");

    // Mostrar el contenedor con los resultados evaluados
    resultadoDiv.style.display = 'block';

    // Mostrar el mensaje «Cumple todas las reglas» ÚNICAMENTE si se cumplen las tres condiciones
    if (hasLength && hasDigit && noSpaces) {
        finalMessage.innerHTML = '<span class="success">Cumple todas las reglas</span>';
    } else {
        finalMessage.innerHTML = '';
    }
}

function actualizarRegla(elemento, cumple, texto) {
    if (cumple) {
        elemento.className = 'rule pass';
        elemento.textContent = `✓ ${texto}`;
    } else {
        elemento.className = 'rule';
        elemento.textContent = `✗ ${texto}`;
    }
}