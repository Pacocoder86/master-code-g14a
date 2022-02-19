// let cuentas = [];

let cuentas = [
  { nombre: "Emilio", password: "a", saldo: 10 },
  { nombre: "Andrea", password: "b", saldo: 20 },
  { nombre: "Hugo", password: "c", saldo: 30 },
];

let nombreUsuario, password1, saldoInicial, userExists, correctPassword;

// Login con intentos
function login() {
  nombreUsuario = document.getElementById("nombre").value;
  password1 = document.getElementById("password").value;
  saldoInicial = document.getElementById("apertura").value;

  userExists = false;
  correctPassword = false;
  saldoExists = false;

  for (i = 0; i < cuentas.length; i++) {
    if (
      cuentas[0].nombre == nombreUsuario ||
      cuentas[1].nombre == nombreUsuario ||
      cuentas[2].nombre == nombreUsuario
    ) {
      userExists = true;
    }
    if (
      cuentas[0].password == password1 ||
      cuentas[1].password == password1 ||
      cuentas[2].password == password1
    ) {
      correctPassword = true;
    }
    if (
      cuentas[0].saldo == saldoInicial ||
      cuentas[1].saldo == saldoInicial ||
      cuentas[2].saldo == saldoInicial
    ) {
      saldoExists = true;
    }

    if (
      (userExists == true && correctPassword == false) ||
      saldoExists == false
    ) {
      document.getElementById("bienvenida").innerText =
        nombreUsuario +
        " " +
        "Hay un error en tus datos, acude a tu sucursal más cercana";
    } else if (
      userExists == true &&
      correctPassword == true &&
      saldoExists == true
    ) {
      document.getElementById("bienvenida").innerText =
        "Hola" + " " + nombreUsuario + " " + "¿Qué operación vas a realizar?";

      /* Agregar el saldo a su array correspondiente.
        if (nombreUsuario == cuentas[0].nombre) {
        cuentas[0].saldo.push({
          saldo: saldoInicial,
        });
      }
      */

      document.getElementById("montoApertura").innerText = saldoInicial;
    }
  }
}
