//variables y entradas

var numero;

numero = Number(prompt("Ingresa un numero"));

function numeroPar(numero) {
  if (numero % 2 === 0) {
    return "el numero es par";
  } else {
    return "el numero es impar";
  }
}

var resultado = numeroPar(numero);
alert("El numero: " + " " + numero + " " + "es" + " " + resultado);
