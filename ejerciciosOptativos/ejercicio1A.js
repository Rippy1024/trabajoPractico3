// Defino la función para encontrar el número mayor en un arreglo
function encontrarNumeroMayor(arreglo) {
    // Verifico si el arreglo está vacío
    if (arreglo.length === 0) {
        return "El arreglo está vacío.";
    }

    // Inicializar una variable para guardar el número mayor
    let numeroMayor = arreglo[0];

    // uso un for sobre el arreglo para encontrar el número mayor
    for (let i = 1; i < arreglo.length; i++) {
        // Comparar el elemento actual con el número guardado como el mayor
        if (arreglo[i] > numeroMayor) {
            numeroMayor = arreglo[i];
        }
    }

    // Devolver el número mayor encontrado
    return numeroMayor;
}

// Ejemplo de uso
let numeros = [5, 12, 8, 20, 3, 15];
let mayor = encontrarNumeroMayor(numeros);

console.log("El número mayor en el arreglo es: " + mayor);
