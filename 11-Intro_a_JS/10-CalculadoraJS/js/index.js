//variables
let numero, operador;

//permite la suma de dos numeros
function Calculo(data) {
  // ['6', 'x', '6'] // data[i]
  let resultado = 0; // 2da: 6 // 3ra: 6
  let operacion = ""; // 2da: "" // 3ra: 'x'

  for (i = 0; i < data.length; i++) {
    // 1ra: i === '6' // 2da: i === 'x' // 3ra: i === '6'
    if (
      data[i] === "+" ||
      data[i] === "-" ||
      data[i] === "x" ||
      data[i] === "/"
    ) {
      operacion = data[i]; // 2da: 'x'
    } else {
      if (operacion === "") {
        // 1ra: operacion === ""
        resultado = Number(data[i]); // 1ra: Number('6') === 6
      } else {
        if (operacion === "+") {
          resultado = resultado + Number(data[i]);
        }

        if (operacion === "-") {
          resultado = resultado - Number(data[i]);
        }

        if (operacion === "x") {
          // 3ra: operacion === 'x'
          resultado = resultado * Number(data[i]); // 3ra: data[i] === '6'
        }

        if (operacion === "/") {
          resultado = resultado / Number(data[i]);
        }
      }
    }
  }

  return resultado;
}

function CapturarDatos(id) {
  //variables locales
  let imprimirTotal = document.getElementById("total");
  let operaciones = document.getElementById("operaciones");
  let historial = document.getElementById("historial");
  let array = [];
  let total;

  if (id === "+" || id === "-" || id === "x" || id === "/") {
    operaciones.innerText = imprimirTotal.innerText + " " + id;
    operador = 1;
  } else if (id === "=") {
    operaciones.innerText =
      operaciones.innerText + " " + imprimirTotal.innerText;
    array = operaciones.innerText.split(" ");
    total = Calculo(array);

    imprimirTotal.innerText = total;

    historial.innerText = operaciones.innerText + " " + id + " " + total;
  } else if (id === "c") {
    imprimirTotal.innerText = "0";
    operaciones.innerText = "";
  } else {
    numero = Number(id);

    if (imprimirTotal.innerText === "0" || operador === 1) {
      imprimirTotal.innerText = numero;
      operador = 0;
    } else {
      imprimirTotal.innerText = imprimirTotal.innerText + numero;
    }
  }
}
