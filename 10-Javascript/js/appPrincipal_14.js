//funcion expresada
// const numAzar = function (min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// };
// console - log(numAzar(100, 201));

//funciones de flecha - con ellas podemos tener atajos,

const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha(1, 11));

// si tienes un parámetro en tu fnción de flecha, puedes omitir los parentesis

const azarFlecha1 = (max) => Math.floor(Math.random() * (max - 1)) + 1;

console.log(azarFlecha1(11));

//

const azarFlecha2 = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha2());

const azarFlecha3 = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha3(null, 50));

const azarFlecha4 = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha4(undefined, 50));
