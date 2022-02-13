//1. Datos de entrada que necesito
var nombre, apellido, anoNacimiento, anoActual, edad, mitad;

// var nombre;
//  var apellido;
// var anoNacimiento;
// var anoActual;

nombre = prompt("Ingresa tu nombre");
apellido = prompt("Ingresa tu Apellido");
anoNacimiento = Number(prompt("Ingresa tu año de nacimeinto"));
anoActual = Number(prompt("Ingresa tu año actual"));

//2. Qué tengo que hacer con esos datos
edad = anoActual - anoNacimiento;
mitad = anoNacimiento / anoActual;

//3. Cómo y qué tengo que mostrar al usuario
// document.write(
//   "Hola amigo, tu nombre es: " +
//     nombre +
//     " " +
//     apellido +
//     ", tu edad es: " +
//     edad +
//     " " +
//     ", la división arroja: " +
//     mitad
// );

document.write(
  `Hola ${nombre} ${apellido}, tu edad es: ${edad}, la división arroja ${mitad}`
);
