//Desafio:
//1. Solicitar los nombres completos de los miembros de la familia que esta escribiendo separados por (,)
//2.Convertir esos nombresa un array de nombres y mostrarlo en consola
//3.Convinar los dos arrays en uno solo y reordenarlo de atras hacia dealnte y o vamos a mistrar al usuario.
//4. agregar las validaciones necesarias.

///variables y entradas
var nombre, apellido1, apellido2, nombreCompleto;
var arrayNombre = []; // incializa arreglo vacio

nombre = prompt("ingresa tu nombre");
apellido1 = prompt("ingresa tu primer apellido");
apellido2 = prompt("ingresa tu segundo apellido");

//logica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;

//salidas

console.log(arrayNombre);
alert(nombreCompleto);
