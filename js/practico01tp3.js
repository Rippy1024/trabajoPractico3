/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

// Crear un array llamado meses
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

document.write("<h2>Lista de meses</h2>");
document.write("<ul>");
for (let cantidadMeses = 0; cantidadMeses < meses.length; cantidadMeses++) {
    document.write("<li>" + meses[cantidadMeses] + "</li>");
}
document.write("</ul>");

