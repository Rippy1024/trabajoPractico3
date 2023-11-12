// función para filtrar números pares en un arreglo
function filtrarNumerosPares(arreglo) {
    // Inicializar un arreglo vacío para almacenar los números pares
    let numerosPares = [];

    // uso for en el arreglo para filtrar los números pares
    for (let i = 0; i < arreglo.length; i++) {
        // Verifico si el elemento actual es un número par
        if (arreglo[i] % 2 === 0) {
            // se agrega el número par al nuevo arreglo
            numerosPares.push(arreglo[i]);
        }
    }

    // Devolver el arreglo con los números pares
    return numerosPares;
}

// Ejemplo
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarNumerosPares(numeros);

console.log("Arreglo original: " + numeros);
console.log("Números pares filtrados: " + numerosPares);
