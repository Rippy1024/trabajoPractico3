// función para convertir grados Celsius a Fahrenheit
function celsiusAfahrenheit(gradosCelsius) {
    // fórmula de conversión
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;

    // Devolver el resultado
    return gradosFahrenheit;
}

// Ejemplo de variable
let temperaturaCelsius = 25;
let temperaturaFahrenheit = celsiusAfahrenheit(temperaturaCelsius);

console.log(`Temperatura en Celsius: ${temperaturaCelsius}°C`);
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}°F`);
