//variables

var nombreCompleto, añoNacimiento, añoActual, edad, msg;

nombreCompleto = prompt("Ingresa tu nombre");
añoNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
añoActual = Number(prompt("Ingresa el año actual"));

//proceso logico

edad = añoActual - añoNacimiento;

if (nombreCompleto !== "x" && añoActual > añoNacimiento) {
  msg = `Los datos son correctos, en breve te dire si eres un niño, adolescente, o un adulto `;
} else {
  msg = `Los datos son incorrectos`;
}

alert(msg);

if (edad <= 0) {
  msg = `Los datos son incorrectos`;
} else if (edad >= 1 && edad <= 12) {
  msj = `Hola ${nombreCompleto} tu eres un niño aún`;
} else if (edad >= 12 && edad < 18) {
  msj = `Hola ${nombreCompleto} tu eres un adolescente`;
} else if (edad >= 18 && edad < 65) {
  msj = `Hola ${nombreCompleto} tu eres un adulto`;
} else {
  msj = `Hola ${nombreCompleto} tu eres un adulto mayor`;
}

alert(msj);
// salida de datos

// alert(msg + " " + "tu edad es: " + edad);
