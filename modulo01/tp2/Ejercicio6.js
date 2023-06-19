var texto = prompt("Introduce un texto:");
var primeraVocal = encontrarPrimeraVocal(texto);

if (primeraVocal !== -1) {
  var posicion = primeraVocal + 1;
  console.log("La primera vocal en el texto '" + texto + "' se encuentra en la posición " + posicion);
} else {
  console.log("No se encontró ninguna vocal en el texto.");
}

function encontrarPrimeraVocal(texto) {
  var vocales = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i].toLowerCase();

    if (vocales.includes(caracter)) {
      return i;
    }
  }

  return -1;
}
