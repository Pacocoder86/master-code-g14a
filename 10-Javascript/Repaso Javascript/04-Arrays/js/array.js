/* 
1. vamos a solicitar los nombres completos de los miembros de la familia separados por comas, por lo menos 2.
2. covertir esos nombres a un array de nombres de la familia y mostrarlos en consola.
3.convinar los dos arrays (persona y familiares) en un solo array, y los vamos a mostrar al usuario. Ademas reordenarlo de atrás para adelante.
5.Validaciones
*/
//variables y entradas
/* var nombreApellido,
  nombreCompleto,
  miembroFam1,
  arreFam,
  nombresFamiliares,
  listaFam,
  listaFam2;

var arrayNombre = [];
var arrayFamiliares = [];

nombreApellido = prompt("Ingresa tu nombre y apellido");
miembroFam1 = prompt(
  "Ingresa los nombres de tus familiares separados por comas"
);

//logica
arrayNombre.push(nombreApellido);
arrayFamiliares.push(miembroFam1);

arreFam = miembroFam1.split(",");

console.log(arrayFamiliares);

//recibimos las variables por separado, los empujamos a un array, y las concatenamos en una nueva variable nombreCompleto.

nombreCompleto = `tu nombre es: ${arrayNombre}, `;

nombresFamiliares = `los nombres de tus familiares son: ${arrayFamiliares}`;

listaFam = nombreCompleto.concat(nombresFamiliares);

//salidas
console.log(listaFam);
alert(listaFam);
*/

// Desafio

var nombre, apellido1, apellido2, nombreCompleto, nombresMiembros;

var arrayNombre = [];
var arrayMiembros = [];
var arrayCombinado = [];

nombre = prompt("Ingresa tu nombre");
apellido1 = prompt("Ingresa tu apellido");
apellido2 = prompt("Ingresa tu apellido 2");
nombresMiembros = prompt(
  "Ingresa los nombres de tus familiares separados por una coma"
);

//logica

arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

if (
  nombre === "" ||
  apellido1 === "" ||
  apellido2 === "" ||
  nombresMiembros === ""
) {
  alert("faltan datos");
} else if (nombresMiembros.includes(",") === false) {
  alert("olvidaste ingrear los nombre separados con una ,");
} else {
  //logica
  arrayMiembros = nombresMiembros.split(",");

  arrayCombinado = arrayNombre.concat(arrayMiembros);

  nombreCompleto = `tu nombre es ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]} `;

  //salida

  console.log(arrayNombre);
  console.log(arrayMiembros);
  alert(nombreCompleto);
  alert(arrayCombinado.reverse());
}
