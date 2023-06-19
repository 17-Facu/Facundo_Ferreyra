function revertirTexto(texto) {
    var textoRevertido = "";
  
    for (var i = texto.length - 1; i >= 0; i--) {
      textoRevertido += texto[i];
    }
  
    return textoRevertido;
  }
  
  var textoOriginal = "Hola Mundo";
  var textoRevertido = revertirTexto(textoOriginal);
  
  console.log("Texto original: " + textoOriginal);
  console.log("Texto revertido: " + textoRevertido);
  