
let numeroIngresado = prompt("Ingrese un número para ver su tabla de multiplicar:");

numeroIngresado = parseInt(numeroIngresado);

// Verificar si se ingresó un número válido
if (isNaN(numeroIngresado)) {
    alert("Por favor, ingrese un número válido.");
} else {
    // traer a la función para mostrar la tabla de multiplicar
    mostrarTablaMultiplicar(numeroIngresado);
}

// Función para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    alert("Tabla de multiplicar del " + numero + ":");

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        alert(numero + " x " + i + " = " + resultado);
    }
}
