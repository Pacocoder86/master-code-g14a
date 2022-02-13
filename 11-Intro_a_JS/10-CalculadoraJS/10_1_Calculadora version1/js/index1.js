let numero, operador;

function Calculo(data) {
  let resultado = 0;
  let operacion = ""; //string vacio = inicializa la varaible en blanco
  // calculo va a recibir un arreglo con los dos numeros y el operador seprados por posciones
  // para hacer esto tengo que iterar el arreglo con un ciclo for

  for (
    i = 0;
    i < data.length;
    i++ //vamos a tener que validar si es un operador o un numero
  ) {
    //data en la posicion en la que se encuentre
    if (
      data[i] === "+" ||
      data[i] === "-" ||
      data[i] === "x" ||
      data[i] === "/"
    ) {
      operacion = data[i]; //en la segunda vuelta, es un operador y a operacion lo va a cambiar por el operador +,-,*
    }
    //toca validar si operacion tiene algo o no en la tercera vuelta
    else {
      if (operacion === "") {
        // 1ra vuelta = como es un string vacio asigno a resultado  el numero que me trajo

        resultado = Number(data[i]);
      } //  a la tercera vuelta. como operacon no es un string vacio entre al else y hace la operacion
      else {
        if (operacion === "+") {
          resultado = resultado + Number(data[i]);
        }

        if (operacion === "-") {
          resultado = resultado - Number(data[i]);
        }

        if (operacion === "x") {
          resultado = resultado * Number(data[i]);
        }

        if (operacion === "/") {
          resultado = resultado / Number(data[i]);
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

    if (id === "+" || id === "-" || id === "x" || id === "c" || id === "/") {
      //operacones va a ser igual al numero que tento en total yle concateno el id = id del operador
      operaciones.innerText = imprimirTotal.innerText + " " + id;
      //agrego un espacio a operacones.innerText, y ya con ese espacio si puedo utilizar l split por el espacio
      // el numero sale en una posción del array, y el operador en otra

      operador = 1;

      //utilizamos un varaible sentinela, le asegino un valor si es que entro al operador y la vadido con en operador total
      // no la puedo declarar como variable local, ya que las locales se declarar cada vez que entra la función
      // la variable sentila se debe conservar en memoria, y no debe cambiar su valor, por lo tanto debe ser global-
    } else if (id === "=") {
      operaciones.innerText =
        operaciones.innerText + " " + imprimirTotal.innerText;

      array = operaciones.innerText.split(" ");
      //declaramos un array en blanco, ese array puede declararse cada vez que entramos a la función, porque sera una funcion diferente
      // array sera igual a operacoiones=h5, y el split, por medio del caracter separador que es nuestro espacio, tendremos un array de 3 psociones
      total = Calculo(array);
      // el return de la funcion calculo lo voy a guardar en el total
      imprimirTotal.innerText = total;

      historial.innerText = operaciones.innerText + " " + id + total;
    } else {
      numero = Number(id);
      //validar que contenido tiene imprimir total

      if (imprimirTotal.innerHTML === "0" || operador === 1) {
        // si la pantalla tiene 0 y el usuario agrega un numero, entonces reemplaza el cero por le numero
        // cuando vuelves a ingresar un numero despues de ingresar el operador, se le asigno a la var operador un valor de 1, por lo tanto reemplaza el valor que este en total
        imprimirTotal.innerText = numero;
        // como la variable operador es global el valor siempre es 1, por lo tanto la tiene que cambiar a cero, para que no reemplaces su valor, si no que se concatene
        operador = 0;
      }
      // si la pantalla no tiene 0, entonces concatena el numero nuevo al anterior imprimirTotal + numero
      else {
        imprimirTotal.innerText = imprimirTotal.innerText + numero;
      }
    }
  }
}
