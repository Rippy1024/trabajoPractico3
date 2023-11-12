// Función para simular el lanzamiento de un dado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Inicializar un array para contar las apariciones de cada suma
let contarApariciones = Array(11).fill(0); // Índices de 2 a 12 (posibles resultados de lanzar dos dados)

// Simular el lanzamiento de dos dados 50 veces
for (let tirarDados = 0; tirarDados < 50; tirarDados++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    // Incrementar el conteo de apariciones de la suma obtenida
    contarApariciones[suma - 2]++;
}

// Mostrar el resultado en el documento HTML
document.write("<table border='1'>");
document.write("<tr><th>Suma🎲🎲</th><th>Apariciones</th></tr>");

for (let resultado = 2; resultado <= 12; resultado++) {
    document.write("<tr>");
    document.write("<td>" + resultado + "</td>");
    document.write("<td>" + contarApariciones[resultado - 2] + "</td>");
    document.write("</tr>");
}

document.write("</table>");

//este ejercicio me hizo parir jajaj
