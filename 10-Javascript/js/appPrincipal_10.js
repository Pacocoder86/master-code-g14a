let estado = true;

if (estado) {
  console.log("Entró al if");
  let estado = false;
  console.log(estado);
}

console.log(estado);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const estado = true;
estado = false;
// // no puedes modificar el estado de una varioable con cons, ya que es de solo lectura

for (const i = 0; i < 5; i++) {
  console.log(i);
}
// for no funciona con el cons, solo con let

const estado = true;
if (estado) {
  const estado = false;
  console.log(estado);
}
console.log(estado);

const frutas = [];
frutas[0] = "sandia";

console.log(frutas);
