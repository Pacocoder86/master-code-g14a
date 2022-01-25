const frutas = [];

const fruta = prompt("¿Qué frutas vas a gregar al carrito?");

frutas.push(fruta);

while (confirm("Desea agregar otra fruta")) {
  const fruta = prompt("¿Qué otra fruta deseas agregar?");
  frutas.push(fruta);
}

console.log("Compraste: ");

frutas.forEach((fruta) => console.log(fruta));
