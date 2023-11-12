/*

*/

// Solicitar al usuario el nombre de ciudades mediante prompt y almacenarlas en un arreglo
let ciudades = [];
let ciudad;

do {
    ciudad = prompt("Ingrese el nombre de una ciudad (o haga clic en Cancelar para finalizar):");
    if (ciudad !== null) {
        ciudades.push(ciudad);
    }
} while (ciudad !== null);

// Mostrar la longitud del arreglo
document.write("<br>El arreglo de ciudades tiene " + ciudades.length + " elementos<br>");

// Mostrar los ítems de las posiciones primera, tercera y última
document.write("• Elemento 1er posición: " + ciudades[0] + "<br>");
document.write("• Elemento 3er posición: " + ciudades[2] + "<br>");
document.write("• Elemento última posición: " + ciudades[ciudades.length - 1] + "<br>");

// Añadir en última posición la ciudad de París
ciudades.push("París");

// Mostrar el elemento por pantalla que ocupa la segunda posición
document.write("<br>• Elemento segunda posición: " + ciudades[1] + "<br>");

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo actualizado
document.write("<br>Arreglo de ciudades actualizado: <br>");
for (let i = 0; i < ciudades.length; i++) {
    document.write("• Elemento " + (i + 1) + ": " + ciudades[i] + "<br>");
}
