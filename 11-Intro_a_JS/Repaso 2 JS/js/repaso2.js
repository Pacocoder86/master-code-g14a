function unaFuncionQueDevuleveValor() {
  console.log("UNo");
  console.log("Dos");
  console.log("Tres");
  return "la funcion ha retornado una cadna de texto";
}

let valorDeFuncion = unaFuncionQueDevuleveValor();
console.log(valorDeFuncion);

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años `);
}

saludar("kenai", 7);

// duncion decalrada VS funciones expresadas
function funcionDeclarada() {
  console.log(
    "esto es una funcion decalrada y pude invocarse en cualquier parte de nuestro código incluso antes de nuestro código"
  );
}

funcionDeclarada();

//funcion anonima
const funcionExpresada = function () {
  console.log(
    "esto es una funcion expresada, es decir, una funcion que se le ha asingado como valor una variabñe. si invocamos esta funcion antes de su definicion JS nos dirá que Cannor Access function expresada before intializaton"
  );
};

funcionExpresada();
