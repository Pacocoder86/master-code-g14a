/*
Crear una aplicacion que permita a un profesor generar las notas definitivas de
sus alumnos.
Debemos permitir al profesor que nos indique cuantos alumnos va a calificar
Debemos permitir al profesor ingresar la cantidad de notas que va promediar 
en general.
Con esas notas vamos obtener el promedio de cada estudiante
Mostrar al profesor al final una lista de estudiantes con su nombre y 
su definitiva.
 */

//variables y entradas

var canitdadAlumnos, cantidadNotas, nombre, notas, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = prompt("Ingresa la cantidad de alumnos");
cantidadNotas = Number(prompt("Ingresa la cantidad de alumnos"));

logica;

for (i = 1; i <= canitdadAlumnos; i++) {
  nombre = prompt("ingresa el nombre del alumno" + i);

  var sumatoria = 0;
  for (j = 1; j <= cantidadNotas; j++) {
    notas = Number(prompt("Ingrese la cantidad de notas" + j));
    sumatoria = sumatoria + notas;
  }
  promedio = sumatoria / cantidadNotas;

  alumno = "alumno: " + nombre + "- Calificación final: " + promedio;

  resultados.push(alumno);
}

function imprimirResultados(resultados) {
  var lista = "";
  for (i = 0; i < resultados.length; i++) {
    lista = lista + resultados[i] + "<br>";
  }
  return lista;
}

var imprimir = imprimirResultados(resultados);
document.write(imprimir);
