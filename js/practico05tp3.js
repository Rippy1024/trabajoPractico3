
function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    }else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    }else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

// Ejemplo de uso de la función
let cadenaEjemplo = "EjemploDeCadena";
let resultado = analizarCadena(cadenaEjemplo);

console.log(resultado);
