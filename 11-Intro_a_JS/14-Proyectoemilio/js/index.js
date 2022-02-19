let cuentas = [];

let nombreUsuario,
  password1,
  saldoInicial,
  userExists,
  correctPassword,
  saldoEnCuenta;

// Login con intentos
function login() {
  nombreUsuario = document.getElementById("nombre").value;
  password1 = document.getElementById("password").value;
  saldoInicial = document.getElementById("apertura").value;

  userExists = false;
  correctPassword = false;
  saldoEnCuenta = 0;

  for (i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre == nombreUsuario) {
      userExists = true;
    }
    if (cuentas[i].password == password1) {
      correctPassword = true;
      saldoEnCuenta = validarCuentas[i].saldo;
    }
  }

  if (userExists == true && correctPassword == false) {
    // si el usuario existe pero los datos son incorrectos
    document.getElementById("bienvenida").innerText =
      "Su contraseña es incorrecta" + " " + nombreUsuario;
    document.getElementById("operaciones").innerText = 0;
  } else if (userExists == true && correctPassword == true) {
    // Si el usuairo existe y la contraseña es correcta
    document.getElementById("bienvenida").innerText =
      "Bienvenido de nuevo" + " " + nombreUsuario;
    document.getElementById("montoApertura").innerText = saldoEnCuenta;
  } else {
    //Primer inicio de sesion
    document.getElementById("bienvenida").innerText =
      "Primer inicio de sesion" + " " + nombreUsuario;
    document.getElementById("montoApertura").innerText = saldoInicial;

    cuentas.push({
      nombre: nombreUsuario,
      password: password1,
      saldo: saldoInicial,
    });

    // validarCuentas.push(user);
    // validarCuentas.push(pass);
    // validarCuentas.push(saldo);
  }
}
