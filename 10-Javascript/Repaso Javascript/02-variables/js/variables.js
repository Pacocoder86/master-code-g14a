//1. datos de entrada - qué necesito mostrar al usuario
var nombre, apellido, añoNacimiento, añoActual, edad, mitad;
/*var nombre;
var apellido;
var añoNacimiento;
var añoActual;*/

nombre = prompt("INgresa tu nombre");
apellido = prompt("INgresa tu apellido");
añoNacimiento = Number(prompt("INgresa año de nacimiento"));
añoActual = Number(prompt("INgresa tu año actual"));

//2.Qué tengo que hacer con esos datos

edad = añoActual - añoNacimiento;

//3. ¿Cómo y qué tengo que mostrar al usuario?
/*document.write(
  "Hola: " + " " + nombre + " " + apellido + " " + "tu edad es:" + edad
);*/

document.write(`Hola ${nombre} ${apellido}, tu edad es: ${edad}`);
