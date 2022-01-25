//funcion declarativa
//retorna un aleatorio, y para que ejecute necesito un console
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(10, 21));

//funcion expresada: Anonima (expresada en una variable)
//lo que estamos retornando, se vay a una variable
//aquó tenemos que crear la función, y después llamarla. A diferencia de las declarativas,a quói no funciona el hoisting

const numAzar = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(numAzar(100, 201));
