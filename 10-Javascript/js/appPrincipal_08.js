function saludar(nombreUsuario) {
  return "Bienvenido!" + nombreUsuario;
  //   console.log("Bienvenido!" + nombreUsuario);
}

console.log(saludar("Paco"));

//Hoisting

function sumar(n1, n2) {
  return parseInt(n1) + parseInt(n2);
}

let numUno = prompt("Ingrese un primer número");
let numDos = prompt("Ingrese segundo número");

console.log(sumar(numUno, numDos));
