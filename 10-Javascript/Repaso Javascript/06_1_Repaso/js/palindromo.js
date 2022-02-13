/* 
definir una función la cual determine si una cadena de texto ingresada por un usuario es un palindromo 
determinar si la palabra esta formada por mayusculas, minusculas o ambos
*/

var texto;
var resultado;

texto = prompt("Ingresa una oración");

function palindromo(texto) {
  var cadenaPrincipal = texto.toLoverCase().toUppercase();

  var letrasEspacios = cadenaPrincipal.split("");

  var cadenaSinEspacios = "";

  for (i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios;
  var reverse = cadenaSinEspacios.split("").reverse("");
  var igual = true;

  for (i in letras) {
    if (letras[i] == reverse[i]) {
    } else {
      igual = false;
    }
  }

  if (igual) {
    resultado += "es un palindromo";
  } else {
    resultado += "no es un palindromo";
  }

  return resultado;
}

resultado = "la cada que ingresaste: ";
alert(palindromo());
