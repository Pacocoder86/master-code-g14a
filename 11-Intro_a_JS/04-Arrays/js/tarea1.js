//Desafio:
//1. Solicitar los nombres completos de los miembros de la familia que esta escribiendo separados por (,) *
//2.Convertir esos nombresa un array de nombres y mostrarlo en consola *
//3.Convinar los dos arrays en uno solo y reordenarlo de atras hacia dealnte y lo vamos a mistrar al usuario.
//4. agregar las validaciones necesarias.

///variables y entradas
var ncIntegrante1,
  ncIntegrante2,
  ncIntegrante3,
  ncIntegrante4,
  nombreCompleto,

var arrayIntegrantes1 = [];
var arrayIntegrantes2 = [];
var arrayIntegrantes3 = [];
var arrayIntegrantes4 = [];

ncIntegrante1 = prompt(
  "ingresa tu nombre y apellidos separados por una coma integrante 1"
);
ncIntegrante2 = prompt(
  "ingresa tu nombre y apellidos separados por una coma integrante 2"
);
ncIntegrante3 = prompt(
  "ingresa tu nombre y apellidos separados por una coma integrante 3"
);
ncIntegrante4 = prompt(
  "ingresa tu nombre y apellidos separados por una coma integrante 4"
);

//logica
arrayIntegrantes1.push(ncIntegrante1.split(","));
arrayIntegrantes2.push(ncIntegrante2.split(","));
arrayIntegrantes3.push(ncIntegrante3.split(","));
arrayIntegrantes4.push(ncIntegrante4.split(","));

nombreCompleto = `los nombres de los integrantes son: ${arrayIntegrantes1} ${arrayIntegrantes2} ${arrayIntegrantes3} ${arrayIntegrantes4}`;

//salidas

console.log(arrayIntegrantes1);
console.log(arrayIntegrantes2);
console.log(arrayIntegrantes3);
console.log(arrayIntegrantes4);

alert(nombreCompleto);
