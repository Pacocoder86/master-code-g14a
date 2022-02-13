let cuentas = [];

function validaUsuario(cuentas) {
  let nombreUsuario = document.getElementById("nombre").value;
  let password = document.getElementById("password").value;
  let saldoInicial = document.getElementById("apertura").value;
  // saldoinicial = document.getElementById("");

  cuentas = nombreUsuario[0] + " " + password[1] + " " + saldoInicial[2];
  cuentas.split(" ");
  console.log(cuentas);

  for (i = 0; i < cuentas.lenght; i++) {
    if (password === cuentas[(5, 10)]) {
      document.getElementById("bienvenida").innerText =
        "¡Hola" + " " + nombreUsuario + "!";
      document.getElementById("operaciones").innerText = saldoInicial;
    } else {
      document.getElementById("bienvenida").innerText =
        "Tus datos son incorrectos ¡intentalo nuevamente!";
    }
  }
}
