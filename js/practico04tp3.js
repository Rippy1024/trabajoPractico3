
let numeroUsuario = prompt("Ingrese un número entero:");

let numeroEntero = parseInt(numeroUsuario);

// Verificar si el numero ingresado es un número entero válido
if (!isNaN(numeroEntero)) {
    // Llamar a la función para determinar la paridad
    let resultado = determinarParidad(numeroEntero);

    // Mostrar el resultado por pantalla
    alert(resultado);
} else {
    alert("Por favor, ingrese un número entero válido.");
}

// Función para determinar la paridad de un número
function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}
