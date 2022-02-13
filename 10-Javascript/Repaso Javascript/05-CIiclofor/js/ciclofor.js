//variables y netradas

var cantidad, promedio;
var nota = [];
var sumatoria = 0;

cantidad = Number(prompt("Ingrese la canitdad de notas a promediar"));
//porceso logico

for (var i = 1; i <= cantidad; i++) {
  nota.push(Number(prompt(`Ingresa la nota ${i}`)));
  sumatoria = sumatoria + nota[i - 1];
}

/*for (var i = 1; i <= cantidad; i++) {
    sumatoria = sumatoria + Number(prompt(`Ingresa la nota ${i}`))
  }
*/

promedio = sumatoria / cantidad;

//salidas

alert(`El promedio de las ${cantidad} notas, es: ${promedio}`);
console.log(nota);
