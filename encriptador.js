let estado = true;

function encriptar() {
    var texto = document.getElementById('texto-entrada').value;
    var textoEncriptado = texto.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('texto-salida').textContent = textoEncriptado;
    if (/[aeiou]/gi.test(texto)) {
        mostrarSalida();
    } else if(estado == false){
        mostrarEntrada();
    }
}

function desencriptar() {
    var texto = document.getElementById('texto-entrada').value;
    var textoDesencriptado = texto.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
    document.getElementById('texto-salida').textContent = textoDesencriptado;
    if (/[aeiou]/gi.test(texto)) {
        mostrarSalida();
    } else if(estado == false){
        mostrarEntrada();
    }
}

function mostrarEntrada() {
    document.querySelector('.caja-actual').style.display = 'block';
    document.querySelector('.presencia-caja').style.display = 'none';
    estado = true;
}

function mostrarSalida() {
    document.querySelector('.caja-actual').style.display = 'none';
    document.querySelector('.presencia-caja').style.display = 'block';
    estado = false;
}

document.getElementById('texto-entrada').addEventListener('input', function() {
    const valorTextarea = this.value;
    const condicion = /[a-z !]/g.test(valorTextarea);
    document.getElementById('botonEncriptar').disabled = !condicion;
    document.getElementById('botonDesencriptar').disabled = !condicion;
});

document.getElementById('botonCopiar').addEventListener('click', function() {
    var texto = document.getElementById('texto-salida').textContent;
    navigator.clipboard.writeText(texto);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botonEncriptar').addEventListener('click', encriptar);
    document.getElementById('botonDesencriptar').addEventListener('click', desencriptar);
});
