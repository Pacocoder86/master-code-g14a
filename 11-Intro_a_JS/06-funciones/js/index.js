//---funcion Hola mundo
// function unaFuncion() {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//   return "Hola mundo";
// }

// unaFuncion();

// var mensaje = unaFuncion();
// console.log(mensaje);

// creas la funcion, agregas una variable

//------------------------------------
// console.log("2 * 0 =", 2 * 0);
// console.log("2 * 1 =", 2 * 1);
// console.log("2 * 2 =", 2 * 2);
// console.log("2 * 3 =", 2 * 3);
// console.log("2 * 4 =", 2 * 4);
// console.log("2 * 5 =", 2 * 5);
// console.log("2 * 6 =", 2 * 6);
// console.log("2 * 7 =", 2 * 7);
// console.log("2 * 8 =", 2 * 8);
// console.log("2 * 9 =", 2 * 9);
// console.log("2 * 10 =", 2 * 10);

//---funcion multiplicar

// function tablaDelDos() {
//   for (i = 0; i <= 10; i++) {
//     console.log("2 * ", i, "=", 2 * i);
//   }
// }

// tablaDelDos();

//---function suma

// function Suma(num1, num2) {
//   var resultado = num1 + num2;

//   alert("El resultado es: " + resultado);

// }
// Suma(5, 30);

//---return

// function sumatoria(num1, num2) {
//   var total = num1 + num2;

//   return " la sumatoria es: " + total;
// }

// var valorTotal = sumatoria(9, 8);
// console.log(valorTotal);

//--- this

// function saludo(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   console.log("Hola yo soy " + this.nombre + " " + "mi edad es: ", this.edad);
// }

// saludo("Jesus", 25);

//---new

// function diaActual() {
//   var fecha = new Date();
//   alert("Hoy es: " + fecha.getDate());
// }

// diaActual();

// definir una función  si la cadena de texto es un palindromo
// definir un función si un número de texto es par o impar

// var numero = prompt("Introduce un número entero");

//  function numeroImpar(numero) {
//    if (numero % 2 == 0) {
//      return "par";
//    } else {
//      return "impar";
//    }
//  }
//  var resultado = numeroImpar(numero);
//  alert("El numero" + numero + "es" + resultado);

// la diferencia de dividir entre 2 siempre tiene que ser 0

//---funciones sin parámetros
// function saludar() {
//   console.log("Bienvenido ");
// }

// saludar();

//---funcion con parámetros sin retorno

// function saludar(nombreUsuario) {
//   return "bienvenido" + nombreUsuario;
// }

// console.log(saludar("paco"));

//---funcion suma

// function sumar(n1, n2) {
//   return Number(n1) + Number(n2);
// }

// let n1 = prompt("Ingrese un numero");
// let n2 = prompt("Ingrese un numero");

// console.log(sumar(n1, n2));

//definir una funcion que defina si un numero es par o impar
// var numero = prompt("Por favor ingresa un número");

// function numerPar(numero) {
//   if (numero % 2 === 0) {
//     return "El numero es par";
//   } else {
//     return "El numero es impar";
//   }
// }

// var resultado = numerPar(numero);

// console.log("El numero" + numero + "es" + resultado);

//definir una funcion que me diga si la frase o la plarabra es un palindromo

var texto;
var resultado;

texto = prompt("ingrese una cadena de texto");

function palindromo(Texto) {
  var cadenaPrincipal = Texto.toLowerCase().toUpperCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaPrincipal.split("");

  // Eliminar los espacios en blanco )
  var cadenaSinEspacios = "";
  for (i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var reverse = cadenaSinEspacios.split("").reverse();

  var igual = true;
  for (i in letras) {
    if (letras[i] == reverse[i]) {
    } else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      igual = false;
    }
  }

  if (igual) {
    resultado += " es un palíndromo";
  } else {
    resultado += " no es un palíndromo";
  }

  return resultado;
}
resultado = "La cadena que ingresaste: ";

alert(palindromo(texto));

function multiplicar() {
  for (i = 1; i <= 10; i++) {
    console.log("2 * " + i + " " + "=" + " " + 2 * i);
  }
}
multiplicar();
