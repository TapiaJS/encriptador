document.getElementById("botonEncriptar").addEventListener("click", encriptador);
document.getElementById("botonDesencriptar").addEventListener("click", desencriptador);
document.getElementById("botonCopiar").addEventListener("click", copiarAlPortapapeles);

let inputText = document.getElementById("texto-entrada");
let outputText = document.getElementById("texto-salida");

function encriptador() {
    let texto = inputText.value;
    let resultado =texto.replace(/a/g, "ai")
                        .replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    asignarTextoElemento("#texto-salida", resultado);
    toggleVisibilidadCajas();
}

function desencriptador() {
    let texto = inputText.value;
    let resultado = texto.replace(/ai/g, "a")
                         .replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    asignarTextoElemento("#texto-salida", resultado);
    toggleVisibilidadCajas();
}

function asignarTextoElemento(selector, texto) {
    let elementoHTML = document.querySelector(selector);
    elementoHTML.textContent = texto; // Usamos textContent en lugar de innerHTML por seguridad y para evitar interpretar el texto como HTML.
}

function toggleVisibilidadCajas() {
    let cajaActual = document.querySelector(".caja-actual");
    let presenciaCaja = document.querySelector(".presencia-caja");
    cajaActual.style.display = "none"; // Oculta la caja actual
    presenciaCaja.style.display = "block"; // Muestra la presencia-caja

}

function copiarAlPortapapeles() {
    outputText.select(); // Selecciona el texto de salida
    document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
    alert("Texto copiado al portapapeles");
}
