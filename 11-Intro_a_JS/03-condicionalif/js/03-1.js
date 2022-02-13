var nombreCompleto, añoNacimiento, añoActual, edad, msg, cantidadCaracteres;

nombreCompleto = prompt("Ingresa tu nombre").toUpperCase().trim();
añoNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
añoActual = Number(prompt("Ingresa el año actual"));

//proceso logico

// Con Or

if (nombreCompleto === "" || añoActual === 0 || añoNacimiento === 0) {
  msg = "te faltaron datos por favor ingresalos todos";
} else if (añoNacimiento > añoActual) {
  msg = "Pilas el año nacimeinto no puede ser mayor al actual";
} else {
  //Obtener canitdad de caracteres de un string
  cantidadCaracteres = nombreCompleto.length;
  console.log(cantidadCaracteres);
  edad = añoActual - añoNacimiento;

  if (edad <= 12) {
    msg = `Los datos son incorrectos`;
  } else if (edad > 12 && edad <= 18) {
    msg = `Hola ${nombreCompleto} tu eres un niño aún`;
  } else if (edad >= 18 && edad < 65) {
    msg = `Hola ${nombreCompleto} tu eres un adulto`;
  } else {
    msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
  }
}

alert(msg);
