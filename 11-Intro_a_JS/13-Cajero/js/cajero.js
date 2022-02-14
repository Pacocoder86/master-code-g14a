let cuentas = [];

function validaUsuario() {
  let nombreUsuario = document.getElementById("nombre").value;
  let password = document.getElementById("password").value;
  let saldoInicial = document.getElementById("apertura").value;

  let userExists = false;
  let correctPassword = false;
  let saldoEnCuenta = 0;

  for (i = 0; i < cuentas.length; i++) {
    // este for no va a correr hasta que no haya cuentas
    if (cuentas[i].nombre == nombreUsuario) {
      // Jacinto // Enrique
      userExists = true;
      if (cuentas[i].password == password) {
        // asd // asdf
        correctPassword = true;
        saldoEnCuenta = cuentas[i].saldo; // 300 // 700
      }
    }
  }

  if (userExists == true && correctPassword == false) {
    // Si el usuario existe pero la contraseña no es correcta
    document.getElementById("bienvenida").innerText =
      "Su contraseña es incorrecta";
    document.getElementById("operaciones").innerText = 0;
  } else if (userExists == true && correctPassword == true) {
    // Si el usuario existe y la contraseña es correcta
    document.getElementById("bienvenida").innerText =
      "Bienvenido de nuevo " + nombreUsuario;
    document.getElementById("operaciones").innerText = saldoEnCuenta;
  } else {
    // Si el usuario no existe entonces se crea una nueva cuenta
    document.getElementById("bienvenida").innerText =
      "Primer inicio de sesion " + nombreUsuario;
    document.getElementById("operaciones").innerText = saldoInicial;
    cuentas.push({
      nombre: nombreUsuario,
      password: password,
      saldo: saldoInicial,
    });
  }
}
