function calcularTotal() {
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Validación de errores
    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0 || !Number.isInteger(cantidad)) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = '<span class="error">Error: Ingresa un precio mayor a 0 y una cantidad entera positiva.</span>';
        return;
    }

    // Cálculos (Reto opcional incluido)
    let subtotal = precio * cantidad;
    let descuento = 0;
    
    if (subtotal >= 100) {
        descuento = subtotal * 0.10;
    }
    
    let total = subtotal - descuento;

    // Formateo e impresión
    resultadoDiv.style.display = 'block';
    if (descuento > 0) {
        resultadoDiv.innerHTML = `
            Subtotal: $${subtotal.toFixed(2)}<br>
            Descuento (10%): <span class="success">-$${descuento.toFixed(2)}</span><br>
            <strong>Total a pagar: $${total.toFixed(2)}</strong>
        `;
    } else {
        resultadoDiv.innerHTML = `<strong>Total a pagar: $${total.toFixed(2)}</strong>`;
    }
}