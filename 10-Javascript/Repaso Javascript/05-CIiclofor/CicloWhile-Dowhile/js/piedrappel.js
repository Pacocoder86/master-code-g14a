var jugador1, jugador2, elecJug1, elecJug2;

var arrayJug1 = [];
var arrayJug2 = [];

jugador1 = prompt(" Jugador 1, Desea iniciar una partida?");
jugador2 = prompt("Jugador 2, Desea inciar una partida?");

if (jugador1 === "no" || jugador2 === "no") {
  alert("buscate a otro compa para jugar");
}

while (jugador1 === "si" && jugador2 === "si") {
  elecJug1 = prompt(
    "Jugador 1, elige la opción que más te agrade; piedra, papel o tijera"
  );
  elecJug2 = prompt(
    "Jugador 2, elige la opción que más te agrade; piedra, papel o tijera"
  );

  arrayJug1.push(elecJug1);
  arrayJug2.push(elecJug2);

  console.log(arrayJug1);
  console.log(arrayJug2);

  if (elecJug1 === "piedra" && elecJug2 === "piedra") {
    alert("esto es un empate, nadie gana");
  } else if (elecJug1 === "piedra" && elecJug2 === "papel") {
    alert("El jugador 2 gana, papel se come a piedra");
  } else if (elecJug1 === "piedra" && elecJug2 === "tijera") {
    alert("El jugador 1 gana, piedra de come a tijera");
  } else if (elecJug1 === "papel" && elecJug2 === "piedra") {
    alert("El jugador 1 gana, papel se come a piedra");
  } else if (elecJug1 === "papel" && elecJug2 === "papel") {
    alert("esto es un empate, nadie gana");
  } else if (elecJug1 === "papel" && elecJug2 === "tijera") {
    alert("El jugador 2 gana, tijera se come a papel");
  } else if (elecJug1 === "tijera" && elecJug2 === "piedra") {
    alert("EL jugador 2 gana, piedra se come a tijera");
  } else if (elecJug1 === "tijera" && elecJug2 === "papel") {
    alert("El jugador 1 gana, tijera se come a papel");
  } else if (elecJug1 === "tijera" && elecJug2 === "tijera") {
    alert("esto es un empate, nadie gana");
  } else if (elecJug1 === "" || elecJug2 === "") {
    alert("favor de seleccionar un elemento para poder jugar");
  }
}
