//Desafio:
//1. Solicitar los nombres completos de los miembros de la familia que esta escribiendo separados por (,) *
//2.Convertir esos nombresa un array de nombres y mostrarlo en consola *
//3.Convinar los dos arrays en uno solo y reordenarlo de atras hacia dealnte y lo vamos a mistrar al usuario.*
//4. agregar las validaciones necesarias.

///variables y entradas
var nombreFam1,
  nombreFam2,
  nombreFam3,
  nombreFam4,
  nombresCompletos,
  arreNom1,
  arreNom2,
  arreNom3,
  arreNom4,
  listaFam1,
  listaFam2;

var arrayNombre1 = [];
var arrayNombre2 = [];
var arrayNombre3 = [];
var arrayNombre4 = [];

nombreFam1 = prompt(
  "familiar 1, por favor ingresa tu nombre separados por comas"
).trim();
nombreFam2 = prompt(
  "familiar 2, por favor ingresa tu nombre separados por comas"
).trim();
nombreFam3 = prompt(
  "familiar 3, por favor ingresa tu nombre separados por comas"
).trim();
nombreFam4 = prompt(
  "familiar 4, por favor ingresa tu nombre separados por comas"
).trim();

//logica
arrayNombre1.push(nombreFam1);
arrayNombre2.push(nombreFam2);
arrayNombre3.push(nombreFam3);
arrayNombre4.push(nombreFam4);

arreNom1 = nombreFam1.split(",");
arreNom2 = nombreFam2.split(",");
arreNom3 = nombreFam3.split(",");
arreNom4 = nombreFam4.split(",");

listaFam1 = arreNom1.concat(arreNom2).reverse();
listaFam2 = arreNom3.concat(arreNom4).reverse();

// nombresCompletos = `Los nombres de los familiares son: ${arrayNombre1}, ${arrayNombre2}, ${arrayNombre3}, ${arrayNombre4}.`;
nombresCompletos = `Los nombres de los familiares son: ${listaFam1}, ${listaFam2}.`;

//Salidas

console.log(arreNom1);
console.log(arreNom2);
console.log(arreNom3);
console.log(arreNom4);

console.log(listaFam1);
console.log(listaFam2);

alert(nombresCompletos);
