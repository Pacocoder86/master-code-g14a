let frutas = ["platano", "sandía", "pertia", "uva"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// for (let i = 0; i <= frutas.length; i++) {
//   console.log(frutas[i]);
// }
for (let fruta of frutas) {
  console.log(fruta);
}

for (let fruta in frutas) {
  console.log(fruta);
}

//for in te da los numeros del indice.

// el of es para los objetos iterables, como un array//

let nombreUsuario = "Paco";

for (let letra of nombreUsuario) {
  console.log(letra);
}

//En consola puedes ver su un objeto es iterable con el sigguiente comando:
// frutas[Symbol.iterator] = f values ()
//números y boleanos no son iterables, array  y string si son iterables.
