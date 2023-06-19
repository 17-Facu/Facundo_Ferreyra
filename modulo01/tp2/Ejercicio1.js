var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Paso 1: Identificar los elementos de texto
var elementosDeTexto = valores.filter(function (elemento) {
  return typeof elemento === "string";
});

// Paso 2: Determinar el elemento de texto con mayor longitud
var elementoMayor = elementosDeTexto.reduce(function (elemento1, elemento2) {
  return elemento1.length > elemento2.length ? elemento1 : elemento2;
});

// Paso 3: Ordenar los elementos de texto de menor a mayor cantidad de letras
elementosDeTexto.sort(function (a, b) {
  return a.length - b.length;
});

// Paso 4: Realizar las operaciones matemáticas básicas
var numeros = valores.filter(function (elemento) {
  return typeof elemento === "number";
});

var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

// Imprimir resultados
console.log("Elemento de texto con mayor longitud:", elementoMayor);
console.log("Elementos de texto ordenados de menor a mayor cantidad de letras:", elementosDeTexto);
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
