// Variables para limite de intentos
let entryCount = 1;
let entryLimit = 3;
let error = false;

// Variables para cambio de pagina
let mainScreen = document.getElementById("mainScreen");
let contentAccountScreen = document.createTextNode("Account Screen");
let accountScreen = document
  .createElement("span")
  .setAttribute("id", "accountScreen");

let user, pass, bal, response, infoCuenta; //Variables para ambito global

// Login
function login() {
  response;
  user = document.getElementById("user");
  pass = document.getElementById("password");
  bal = document.getElementById("bal");
  if (user.value === "Emilio" && pass.value === "abc123") {
    // Variables para local Storage
    localStorage.setItem("user", user.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("bal", bal.value);
    window.location.href = "cajero.html";
  } else {
    if (entryCount < entryLimit) {
      entryCount++;
      alert("Contraseña o usuario invalido, intentelo nuevamente");
    } else {
      alert("Pasaste el limite de intentos");
      window.location.href = "index.html";
    }
  }
}

// Botones del cajero
function CapturarDatos(id) {
  let imprimirCantidad = document.getElementById("cantidad");
  let array = [];
  let total;

  if (id === "+" || id === "-" || id === "x" || id === "c" || id === "/") {
    operaciones.innerText = imprimirTotal.innerText + " " + id;
    operador = 1;
  } else if (id === "=") {
    operaciones.innerText =
      operaciones.innerText + " " + imprimirCantidad.innerText;
    array = operaciones.innerText.split(" ");
    total = Calculo(array);

    imprimirCantidad.innerText = total;

    historial.innerText = operaciones.innerText + " " + id + " " + total;
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

// Calculadora y operaciones
//permite la suma de dos numeros
function Calculo(data) {
  // ['6', 'x', '6'] // data[i]
  let resultado = 0; // 2da: 6 // 3ra: 6
  let operacion = ""; // 2da: "" // 3ra: 'x'

  for (i = 0; i < data.length; i++) {
    // 1ra: i === '6' // 2da: i === 'x' // 3ra: i === '6'
    if (data[i] === "+" || data[i] === "-") {
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
      }
    }
  }

  return resultado;
}

function ingresarDatos() {
  let myData1 = localStorage.getItem("user");
  let myData2 = localStorage.getItem("password");
  let myData3 = localStorage.getItem("bal");

  console.log(myData1);
  console.log(myData2);
  console.log(myData3);

  infoCuenta = [];
  infoCuenta.push("bal");
}

function CapturarDatos(id) {
  let imprimirTotal = document.getElementById("total"); //Es un h2 en el aside
  let operaciones = document.getElementById("operaciones"); //Es un h5 en el aside
  let montoInicial = document.getElementById("montoApertura");
  let array = [];
  total;

  if (id === "+" || id === "-") {
    // montoInicial.innerText = saldoInicial;
    operaciones.innerText = montoInicial.innerText + " " + id;

    operador = 1;
  } else if (id === "break") {
    document.getElementById("bienvenida").innerText =
      nombreUsuario + " " + "¡Gracias por utilizar nuestros servicios!";

    imprimirTotal.innerText = "0";
    operaciones.innerText = "0";
    saldoFinal.innerText = "$";
    montoInicial.innerText = "$";

    for (i = 0; i < cuentas.length; i++) {
      if (cuentas[i].nombre == nombreUsuario) {
        userExists = true;
        cuentas[i].saldo = total;
      }
    }
  } else if (id === "=") {
    // operaciones.innerText = confirm('¿Quieres confirmar esta operación?')
    document.getElementById("bienvenida").innerText =
      nombreUsuario + " " + "¡Acabas de realizar un movimiento!";

    operaciones.innerText =
      operaciones.innerText + " " + imprimirTotal.innerText;
    array = operaciones.innerText.split(" ");
    total = Calculo(array);
    imprimirTotal.innerText = "$" + " " + total;
    saldoFinal.innerText = "$" + " " + total;
    montoInicial.innerHTML = "";
  } else if (id === "c") {
    imprimirTotal.innerText = "0";
    operaciones.innerText = "0";
    saldoFinal.innerText = "$";
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
