//Ejercicio con DOW HILE

//variables y entradas
var numero;
var sumatoria = 0;

//logica
do {
  numero = Number(
    prompt("Ingresa un numero para continuar o nada para terminar")
  );

  if (numero > 0) {
    sumatoria = sumatoria + numero;
  }
} while (numero < 0);

//salidas

alert(`La sumatoria de los numeros es ${sumatoria}`);

/* Ejercicio con While

//variables y entradas
var numero;
var sumatoria = 0;
var aux = 0;

//logica
while (aux === 0) {
  numero = Number(
    prompt("Ingresa un numero para continuar o nada para terminar")
  );

  if (numero > 0) {
    sumatoria = sumatoria + numero;
  } else {
    aux = -1;
  }
}

//salidas

alert(`La sumatoria de los numeros es ${sumatoria}`);
*/
