//variables y entradas
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = Number(prompt("Ingresa la cantidad de alumnos de tu clase"));
cantidadNotas = Number(
  prompt("Ingresa la cantidad de notas a promediar de los Alumnos")
);

//proceso logico
for (i = 1; i <= cantidadAlumnos; i++) {
  var sumatoria = 0;

  nombre = prompt("Ingresa el nombre del alumno " + i);

  for (j = 1; j <= cantidadNotas; j++) {
    nota = Number(prompt("Ingresa la nota" + j));
    sumatoria = sumatoria + nota;
  }
  promedio = sumatoria / cantidadNotas;

  alumno = nombre + " " + "calificación: " + " " + promedio;

  resultados.push(alumno);
}
console.log(resultados);

var [] = resultados;

console.log(dato);

function imprimirResultados(dato) {
  var lista = "";
  for (i = 0; i < dato.lenght; i++) {
    lista = lista + dato;
  }

  return dato;
}

var imprimir = imprimirResultados(dato);
document.write(imprimir);

/*
function imprimeResultados(resultados) {
  var lista = "";
  for (i = 0; i < resultados.length; i++) {
    lista = lista + resultados[i] + "<br>";
  }

  return lista;
}

//impresion de resultado
var imprimir = imprimeResultados(resultados);

document.write(imprimir);
*/
