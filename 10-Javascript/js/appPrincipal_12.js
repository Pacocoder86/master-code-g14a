//practica

//0) hayq ue inicializar un array de frutas vacia

const frutas = [];
//1) lo p´rimero que hay que hacer, es que se incialice  ese arreglo de frutas vacias

const fruta = prompt("Qué fruta desea comprar");
//2 para preguntar por algo, ejecutamos promt + un el string

frutas.push(fruta);
//3 antes de poder pintar la fruta en la consola, debemos hacer un push de fruta, ya que el array fruta esta vacio

//4confirm recibe un string, si e usuario pone confirm, el confirm retorna un true o un false

while (confirm("Desea agregar otro elemento al carrito")) {
  const fruta = prompt("Qué fruta desea comprar");
  frutas.push(fruta);
}
//5 while es un ciclo (condicoin de entrada) { mientras la condicon de entrada se cumpla, ejecuto algo aquía dentro}
// preguntas que fruta
// empujamos esa fruta al array

console.log("Compraste: ");
for (const fruta of frutas) {
  console.log(fruta);
}
//3 para recorrer los elementos del array, utilizaremos el for of

//lógica
//frutas = array
//fruta = la pregunta donde se almacenan lo que escribio el usuairo en ese  input
//empujamos nuestra fruta al array
//pintamos un console
//rrecorremos ese array con una constante llamada fruta, que diferente porque vive en el scope del for
// la pintamos abajo
