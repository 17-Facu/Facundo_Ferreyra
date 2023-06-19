let meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  
  let numeroMes = prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes");
  
  if (numeroMes >= 1 && numeroMes <= 12) {
    let mesSeleccionado = meses[numeroMes - 1];
    console.log("El mes correspondiente al número " + numeroMes + " es " + mesSeleccionado);
  } else {
    console.log("Número de mes inválido");
  }