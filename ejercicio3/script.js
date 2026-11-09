// Arreglo inicial
const notas = [8, 6, 9, 7, 5, 10, 4, 7];

function analizarNotas() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar rango de notas (Reto opcional)
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 10) {
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `<span class="error">Error: La nota ${notas[i]} está fuera del intervalo (0-10).</span>`;
            return;
        }
    }

    // Inicialización de acumuladores y contadores
    let suma = 0;
    let maxima = notas[0];
    let minima = notas[0];
    let aprobadas = 0;
    let reprobadas = 0;

    // Ciclo principal
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        
        suma += nota;
        
        if (nota > maxima) maxima = nota;
        if (nota < minima) minima = nota;
        
        if (nota >= 7) {
            aprobadas++;
        } else {
            reprobadas++;
        }
    }

    let promedio = suma / notas.length;

    // Imprimir resultados
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Calificaciones:</strong> [${notas.join(', ')}]<br><br>
        <strong>Promedio:</strong> ${promedio.toFixed(2)}<br>
        <strong>Nota más alta:</strong> ${maxima}<br>
        <strong>Nota más baja:</strong> ${minima}<br><br>
        <strong>Aprobadas:</strong> <span class="success">${aprobadas}</span><br>
        <strong>No aprobadas:</strong> <span class="error">${reprobadas}</span>
    `;
}