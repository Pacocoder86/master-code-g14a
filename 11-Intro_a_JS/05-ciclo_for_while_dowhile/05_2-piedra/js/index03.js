var elecJug1, elecJug2, juegoNuevo1, juegoNuevo2, msg1, msg2;

alert("¡Juguemos piedra, papel o tijera!");

do {
  elecJug1 = prompt(
    "Jugador 1, es tu turno de jugar! escoje: piedra, papel, o tijera."
  );
  elecJug2 = prompt(
    "Jugador 2, es tu turno de jugar! escoje: piedra, papel, o tijera0."
  );

  if (elecJug1 === "" || elecJug2 === "") {
    msg1 = "Por favor, validen  los datos para poder jugar";
  } else if (elecJug1 === undefined || elecJug2 === undefined) {
    msg1 = "Por favor, validen  los datos para poder jugar";
  } else {
    console.log(elecJug1);
    console.log(elecJug2);

    if (elecJug1 === "piedra" && elecJug2 === "piedra") {
      msg1 = "Es un empate";
    } else if (elecJug1 === "papel" && elecJug2 === "papel") {
      msg1 = "Es un empate";
    } else if (elecJug1 === "tijera" && elecJug2 === "tijera") {
      msg1 = "Es un empate";
    } else if (elecJug1 === "piedra" && elecJug2 === "papel") {
      msg1 = "Papel se come a la piedra, gana el jugador 2!!!";
    } else if (elecJug1 === "piedra" && elecJug2 === "tijera") {
      msg1 = "Piedra se come a tiejras, gana el jugador 1!!!";
    } else if (elecJug1 === "papel" && elecJug2 === "piedra") {
      msg1 = "Papel se come a la piedra, gana el jugador 1!!!";
    } else if (elecJug1 === "papel" && elecJug2 === "tijera") {
      msg1 = "Tijeras se come a papel, gana jugador 2!!!";
    } else if (elecJug1 === "tijera" && elecJug2 === "papel") {
      msg1 = "Tijeras se come a papel, ganael jugador 1!!!";
    } else if (elecJug1 === "tijera" && elecJug2 === "piedra") {
      msg1 = "Piedra se come a tijera, gana el jugador2!!!";
    }
  }

  alert(msg1);

  juegoNuevo1 = prompt("Jugardores, ¿Deseán juegar una partida?");
} while (juegoNuevo1 === "si");

if (juegoNuevo1 === "no" || juegoNuevo1 === "") {
  msg2 = "fin de la partida";
}

alert(msg2);
