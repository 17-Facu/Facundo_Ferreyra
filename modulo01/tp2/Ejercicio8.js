function generarNumerosAleatorios() {
    var numeros = [];
  
    // Generar 100 números aleatorios sin repetir
    while (numeros.length < 100) {
      var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  
      if (numeros.indexOf(numeroAleatorio) === -1) {
        numeros.push(numeroAleatorio);
      }
    }
  
    // Imprimir los números en pantalla
    for (var i = 0; i < numeros.length; i++) {
      document.write(numeros[i] + "<br>");
    }
  }
  
  generarNumerosAleatorios();
  