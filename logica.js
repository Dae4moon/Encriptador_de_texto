document.addEventListener('DOMContentLoaded', function() {
    const inputTextarea = document.querySelector('.input_codificar');
    const outputMessage = document.querySelector('.mensaje_no_encontrado .mensaje');
    const encryptButton = document.querySelector('.boton_primario');
    const decryptButton = document.querySelector('.boton_secundario');

    // Validar entrada solo en minúsculas
    inputTextarea.addEventListener('keydown', function(event) {
        const pressedKey = event.key;
        // Permitir teclas de control, alt, meta y backspace
        if (event.ctrlKey || event.altKey || event.metaKey || pressedKey === 'Backspace') {
            return; // Permitir teclas de control sin restricción
        }
        // Prevenir entrada de teclas que no sean letras minúsculas
        if (pressedKey !== pressedKey.toLowerCase()) {
            event.preventDefault(); // Prevenir entrada de la tecla
        }
    });

    // Encriptar texto
    encryptButton.addEventListener('click', function() {
        const plainText = inputTextarea.value.toLowerCase(); // Convertir texto a minúsculas
        const encryptedText = encryptText(plainText);
        outputMessage.innerHTML = encryptedText; // Mostrar texto encriptado en output
    });

    // Desencriptar texto
    decryptButton.addEventListener('click', function() {
        const encryptedText = inputTextarea.value.toLowerCase(); // Convertir texto a minúsculas
        const decryptedText = decryptText(encryptedText);
        outputMessage.innerHTML = decryptedText; // Mostrar texto desencriptado en output
    });

    // Función para encriptar texto
    function encryptText(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar texto
    function decryptText(text) {
        return text
            .replace(/ufat/g, 'u')
            .replace(/ober/g, 'o')
            .replace(/imes/g, 'i')
            .replace(/enter/g, 'e')
            .replace(/ai/g, 'a');
    }
});





