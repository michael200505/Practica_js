// Reto opcional: Event listener para actualizar mientras se escribe sin presionar botón
document.getElementById('password').addEventListener('input', verificarPassword);

function verificarPassword() {
    const pass = document.getElementById('password').value;
    
    // Referencias a los elementos del DOM
    const ruleLength = document.getElementById('rule-length');
    const ruleDigit = document.getElementById('rule-digit');
    const ruleSpace = document.getElementById('rule-space');
    const finalMessage = document.getElementById('final-message');

    // 1. Comprobar longitud
    let hasLength = pass.length >= 8;
    actualizarRegla(ruleLength, hasLength, "Al menos 8 caracteres");

    // 2. Comprobar dígito utilizando ciclo (sin Regex)
    let hasDigit = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= '0' && pass[i] <= '9') {
            hasDigit = true;
            break;
        }
    }
    actualizarRegla(ruleDigit, hasDigit, "Al menos un dígito (0-9)");

    // 3. Comprobar espacios
    let noSpaces = !pass.includes(' ');
    actualizarRegla(ruleSpace, noSpaces, "Sin espacios en blanco");

    // Mensaje final
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