function verificarCadena(cadena) {
    var esMayuscula = false;
    var esMinuscula = false;
  
    for (var i = 0; i < cadena.length; i++) {
      if (cadena[i] === cadena[i].toUpperCase()) {
        esMayuscula = true;
      } else if (cadena[i] === cadena[i].toLowerCase()) {
        esMinuscula = true;
      }
  
      if (esMayuscula && esMinuscula) {
        return "Mezcla de mayúsculas y minúsculas";
      }
    }
  
    if (esMayuscula) {
      return "Solo mayúsculas";
    } else {
      return "Solo minúsculas";
    }
  }
  
  var cadenaTexto = "Hola Mundo";
  var resultado = verificarCadena(cadenaTexto);
  
  console.log("La cadena '" + cadenaTexto + "' está formada por: " + resultado);
  