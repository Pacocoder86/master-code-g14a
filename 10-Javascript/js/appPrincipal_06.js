//if//
let stringUsuario = prompt('Escriba "Javascript"');

if (stringUsuario === "Javascript") {
  console.log("correcto");
} else {
  console.log("incorrecto");
}

let numUsuario = parseInt(prompt("Ingresa un número del 1 al 10"));

if (numUsuario <= 10) {
  console.log("perfecto!");
} else {
  console.log("te equivocaste!");
}

//template string//
let opcionUsuario = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);
console.log(opcionUsuario);

//switch//
switch (opcionUsuario) {
  case "1":
    console.log("principito");
    break;
  case "2":
    console.log("Matriz");
    break;
  case "3":
    console.log("NFS");
    break;
  default:
    console.log("Opcion no valida");
    break;
}

//while
let numero = 1;

while (numero <= 10) {
  console.log(numero);
  //   numero = numero + 1; incrementador
  numero++;
}

console.log("fin numero" + numero);

//math.random

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3;

let numeroUsuario = parseInt(prompt("Adivine un número del 1 al 10"));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
  let mensaje =
    numeroMaquina > numeroUsuario
      ? "El numeroMaquina es mayor"
      : "El numeroMaquina es menor";

  console.log("Te equivocaste!" + mensaje);
  numeroUsuario = parseInt(promt("número del 1 al 10"));
  vidas--;
}

if (numeroMaquina === numeroUsuario) {
  console.log("Ganaste");
} else {
  console.log("Perdiste");
}
