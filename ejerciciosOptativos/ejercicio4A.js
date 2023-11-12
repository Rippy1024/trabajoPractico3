//función para generar números primos hasta un número dado
function generarNumerosPrimos(maximo) {
    // arreglo vacío para almacenar los números primos
    let numerosPrimos = [];

    // Función para verificar si un número es primo
    function esPrimo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false; // No es primo si es divisible por algún número antes de él
            }
        }
        return numero > 1; // El 1 no se considera primo, por lo que retornamos true solo para números mayores que 1
    }

    // Iterar desde 2 hasta el número máximo y agregar los primos al arreglo
    for (let i = 2; i <= maximo; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    // Devolver el arreglo con los números primos
    return numerosPrimos;
}

// Ejemplo de variable
let maximoNumero = 30;
let primosHastaMaximo = generarNumerosPrimos(maximoNumero);

document.write(`Números primos hasta ${maximoNumero}: ${primosHastaMaximo}`);
