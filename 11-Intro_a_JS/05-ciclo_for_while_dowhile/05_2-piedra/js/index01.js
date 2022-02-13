//variables y entradas
var elecJug1, elecJug2, juegoNuevo1, juegoNuevo2, msg1, msg2;

juegoNuevo1 = prompt("Jugardores, ¿Deseán juegar una partida");

if (juegoNuevo1 === "si") {
  elecJug1 = prompt(
    "Jugador 1!!! es tu turno de jugar, escoje piedra, papel, o tijera"
  );
  elecJug2 = prompt(
    "Jugador2!!! es tu turno de jugar, escoje piedra, papel, o tijera"
  );

  if (elecJug1 === "" || elecJug2 === "") {
    msg1 = "Se requiren datos para poder jugar";
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
} else {
  msg1 = "se ha terminado la partida";
}

alert(msg1);

juegoNuevo2 = prompt("Jugardores, ¿Desean juegar una partida");

if (juegoNuevo2 === "si") {
  elecJug1 = prompt(
    "Jugador 1!!! es tu turno de jugar, escoje piedra, papel, o tijera"
  );
  elecJug2 = prompt(
    "Jugador2!!! es tu turno de jugar, escoje piedra, papel, o tijera"
  );

  if (elecJug1 === "" || elecJug2 === "") {
    msg2 = "Se requiren datos para poder jugar";
  } else {
    console.log(elecJug1);
    console.log(elecJug2);

    if (elecJug1 === "piedra" && elecJug2 === "piedra") {
      msg2 = "Es un empate";
    } else if (elecJug1 === "papel" && elecJug2 === "papel") {
      msg2 = "Es un empate";
    } else if (elecJug1 === "tijera" && elecJug2 === "tijera") {
      msg2 = "Es un empate";
    } else if (elecJug1 === "piedra" && elecJug2 === "papel") {
      msg2 = "Papel se come a la piedra, gana el jugador 2!!!";
    } else if (elecJug1 === "piedra" && elecJug2 === "tijera") {
      msg2 = "Piedra se come a tiejras, gana el jugador 1!!!";
    } else if (elecJug1 === "papel" && elecJug2 === "piedra") {
      msg2 = "Papel se come a la piedra, gana el jugador 1!!!";
    } else if (elecJug1 === "papel" && elecJug2 === "tijera") {
      msg2 = "Tijeras se come a papel, gana jugador 2!!!";
    } else if (elecJug1 === "tijera" && elecJug2 === "papel") {
      msg2 = "Tijeras se come a papel, ganael jugador 1!!!";
    } else if (elecJug1 === "tijera" && elecJug2 === "piedra") {
      msg2 = "Piedra se come a tijera, gana el jugador2!!!";
    }
  }
} else {
  msg2 = "se ha terminado la partida";
}

alert(msg2);
