
let ladoA = prompt("Ingrese el valor del lado A del rectángulo:");
let ladoB = prompt("Ingrese el valor del lado B del rectángulo:");

// Convertir los valores ingresados a números
ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);

// Verificar si se ingresaron valores válidos
if (isNaN(ladoA) || isNaN(ladoB)) {
    alert("Por favor, ingrese valores numéricos válidos.");
} else {
    // Llamar a la función para calcular el perímetro y mostrar el resultado
    let resultado = calcularPerimetro(ladoA, ladoB);
    alert("El perímetro del rectángulo es: " + resultado);
}

// Función para calcular el perímetro
function calcularPerimetro(a, b) {
    return 2 * (a + b);
}
