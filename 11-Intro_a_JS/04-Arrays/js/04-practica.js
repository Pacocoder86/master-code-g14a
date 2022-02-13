var nombre, apellido1, apellido2, nombreCompleto, nombresMiembros;

var arrayNombre = []; // incializa arreglo vacio
var arrayFamiliares = [];
var arrayCombinado = [];

nombre = prompt("ingresa tu nombre");
apellido1 = prompt("ingresa tu primer apellido");
apellido2 = prompt("ingresa tu segundo apellido");
nombresMiembros = prompt("ingresa los nombres de los integrantes");

if (
  nombre === "" ||
  apellido1 === "" ||
  apellido2 === "" ||
  nombresMiembros === ""
) {
  alert("por favor rellena los datos");
} else if (nombresMiembros.includes(",") === false) {
  alert("Olvidaste ingresara los nombres separados con una coma");
} else {
  arrayNombre.push(nombre);
  arrayNombre.push(apellido1);
  arrayNombre.push(apellido2);

  arrayFamiliares = nombresMiembros.split(",");

  arrayCombinado = arrayNombre.concat(arrayFamiliares);

  nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;

  //salidas

  console.log(arrayNombre);
  console.log(arrayFamiliares);
  alert(nombreCompleto);
  alert(arrayCombinado.reverse());
}
