var numeroMes = parseInt(prompt("Ingrese el número de mes:"));

// Validar que el número de mes sea válido (entre 1 y 12)
while (numeroMes < 1 || numeroMes > 12 || isNaN(numeroMes)) {
  numeroMes = parseInt(prompt("Ingrese un número de mes válido (entre 1 y 12):"));
}

var dias;

switch (numeroMes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = "28 o 29";
    break;
}

console.log("El mes " + numeroMes + " tiene " + dias + " días.");
