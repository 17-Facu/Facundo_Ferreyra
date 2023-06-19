function calcularFactorial(numero) {
    var factorial = 1;
  
    for (var i = 2; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  var numeroEntero = 5;
  var factorialResultado = calcularFactorial(numeroEntero);
  
  console.log("El factorial de " + numeroEntero + " es: " + factorialResultado);
  