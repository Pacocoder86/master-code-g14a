// let numUno = parseInt(prompt("Ingresa un numero"));
// let numDos = parseInt(prompt("Ingresa otro numero"));
// let resultado = numUno + numDos;
// console.log(resultado);

// let nombreUsuario = prompt("Cual es tu nombre");
// let apellidoUsuario = prompt("Cuales tu apellido");

// console.log(typeof nombreUsuario);

// let nombreCompleto = nombreUsuario + apellidoUsuario;
// console.log(nombreCompleto);

// let res = 20 / 5;
// console.log(res);

// let res1 = 8 % 3;
// console.log(res1);

// let resultado = 20 === 10;
// console.log(resultado);

// let resultado = 10 !== "10";
// console.log(resultado);

// let resultado = true && true;
// console.log(resultado);

// let resultado = 20 > 10 && 10 < 20;
// console.log(resultado);

// let resultado = true && true && false;
// console.log(resultado);

// let resultado = true || false;
// console.log(resultado);

// let resultado = true || false || false;
// console.log(resultado);

// let resultado = !false;
// console.log(resultado);

// let numUsuario = parseInt(prompt("Ingresa un numero de usuario"));

// console.log("El numero ingresado, es: " + parseInt(numUsuario));

// if (numUsuario <= 10) {
//   console.log("Muy bien");
// } else console.log("Muy mal");

// let opcionUser = prompt(`
//  Elige una opcion:
//  1: Libros
//  2: Película
//  3: Juego
//  `);

// switch (opcionUser) {
//   case "1":
//     console.log("Principito");
//     break;
//   case "2":
//     console.log("Matriz");
//     break;
//   case "3":
//     console.log("caca");
//     break;
//   default:
//     console.log("opción no valida");
//     break;
// }

// let numero = 0;
// while (numero <= 10) {
//   console.log(numero);
//   numero++;
// }
// console.log("fin: " + numero);

let numMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numMaquina);

let vidas = 3;

let numJugador = parseInt(prompt("¿Adivina un numero entre 1 y 10?"));

while (numMaquina !== numJugador && vidas > 1) {
  let mensaje =
    numMaquina > numJugador
      ? "El numeroMaquina es más grande"
      : "El numeroMaquina es mas pequeño";
  console.log("te equivocaste" + mensaje);
  numJugador = parseInt(prompt("¿Adivina un numero entre 1 y 10?"));
  vidas--;
}

if (numMaquina === numJugador) {
  console.log("Ganaste");
} else {
  console.log("Perdiste");
}

//Array
// let frutas = ["manzana", "platano", "pera"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

let frutas1 = ["manzana", "platano", "pera", "uvas"];

for (let i = 0; i < frutas1.length; i++) {
  console.log(frutas1[i]);
}

let frutas2 = ["manzana", "platano", "pera", "uvas"];

for (let fruta of frutas2) {
  console.log(fruta);
}

let nombreMaestro = "Paco";

for (let letra of nombreMaestro) {
  console.log(letra);
}

//funciones

function saludar(nombreUsuario) {
  return "Bienvenido" + nombreUsuario;
}
console.log(saludar("Paco"));

//funcion de suma

function sumar(n1, n2) {
  return parseInt(n1) + parseInt(n2);
}

let n1 = prompt("ingresa el numero 1");
let n2 = prompt("ingresa el numero 2");

console.log(sumar(n1, n2));
