const frutas = [];

const fruta = prompt("Qué fruta desea comprar");

frutas.push(fruta);

while (confirm("Desea agregar otro elemento al carrito")) {
  const fruta = prompt("Qué fruta desea comprar");
  frutas.push(fruta);
}

console.log("Compraste: ");
// for (const fruta of frutas) {
//   console.log(fruta);
// }

frutas.forEach((fruta) => console.log(fruta));

// el paramentro fruta se va a comportar como cada uno de los elementos del array
// el for each ejecuta la función indicada una vez por cada elelemtno del array

let elementos = ["manzana", "sandia", "pera"];

elementos.forEach((elemento, index, array) => {
  console.log(`${index}: ${elemento}`);
  //   console.log(array);
});

// no solamente podemos pintar el elemeto, sino también el indice, y el array en un for each
