function verificarParidad(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  
  var numeroEntero = 5;
  var resultado = verificarParidad(numeroEntero);
  
  console.log("El número " + numeroEntero + " es " + resultado);
  