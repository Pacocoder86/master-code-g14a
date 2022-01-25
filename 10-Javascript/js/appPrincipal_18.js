//Conceptos clave
// template strigs

let nombreUsuario = "Paco";
let estado = true;

console.log(`bienvenido: ${nombreUsuario.toUpperCase()}`);

console.log(`

${estado ? "enlinea" : "offline"}

`);

// vas vs let vs consts

//ARRAY VS CONS

// const frutas = [];
// frutas[0] = "sandia";

// console.log(frutas);

// ARRAY (PUSH, POP, SHIFT, UNSHIFT)

const frutas1 = ["sandia", "pera", "camaron"];

frutas1.push("melón");

console.log(frutas1);

const frutas2 = ["sandia", "pera", "camaron"];

frutas2.unshift("melón");

console.log(frutas2);

const frutas3 = ["sandia", "pera", "camaron"];
const frutaEliminada = frutas3.pop();
console.log(frutas3);
console.log(frutaEliminada);

// const frutas3 = ["sandia", "pera", "camaron"];
// const frutaEliminada1 = frutas4.shift();
// console.log(frutas4);
// console.log(frutaEliminada1);

//CARRITO DE COMPRAS

const frutas = [];

const fruta = prompt("¿Qué fruta desea agregar?");
frutas.push(fruta);

while (confirm("deseas agregar otra fruta")) {
  const fruta = prompt("¿Qué fruta desea agregar?");
  frutas.push(fruta);
}

console.log("Compraste: ");
for (const fruta of frutas) {
  console.log(fruta);
}

//funciones anónimas

// funcion declarativa
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(10, 21));

//función anónima o expresada

const numAzar = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(numAzar(100, 201));

//funciones de flecha

// const azarFlecha = (min, max) => {
//     return Math.floor(Math.random()*(max - min)) + min;
// }

// en las funciones de flecha, puedes quitar el return, y quitar las llaves.

const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha(1, 11));

//Solo un parametro - Maximo
const azarFlecha1 = (max) => Math.floor(Math.random() * (max - 1)) + 1;

console.log(azarFlecha1(11));

//Cómo definimos un aprámetro
const azarFlecha2 = (min, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha2(11));

//Cómo puedo hacer que solo cambie un parámetro (null / undefined)

const azarFlecha3 = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha3(null, 50));

//Arrow / for each

const frutas1 = [];

const fruta1 = prompt("¿Qué fruta desea agregar?");
frutas1.push(fruta1);

while (confirm("deseas agregar otra fruta")) {
  const fruta1 = prompt("¿Qué fruta desea agregar?");
  frutas1.push(fruta1);
}

console.log("Compraste: ");
// for (const fruta of frutas) {
//   console.log(fruta);
// }

frutas1.forEach((fruta1) => console.log(fruta1));

// for each - te puede pintar el index y el array

let frutas5 = ["manzana", "pera", "mandarina"];

frutas5.forEach((fruta5, index) => {
  console.log(`${index}: ${fruta5}`);
});
