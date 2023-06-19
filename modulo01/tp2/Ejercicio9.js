var cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
var notas = [];

for (var i = 0; i < cantidadNotas; i++) {
  var nota = parseInt(prompt("Ingrese la nota #" + (i + 1) + ":"));

  // Valida que la nota sea un número natural menor a 11
  while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseInt(prompt("Ingrese una nota válida entre 0 y 10:"));
  }

  notas.push(nota);
}

var sumaNotas = 0;

for (var i = 0; i < notas.length; i++) {
  sumaNotas += notas[i];
}

var promedio = sumaNotas / notas.length;

console.log("Promedio: " + promedio);

if (promedio < 5) {
  console.log("Reprobado");
} else if (promedio >= 6 && promedio <= 8) {
  console.log("Aprobado");
} else {
  console.log("Sobresaliente");
}
