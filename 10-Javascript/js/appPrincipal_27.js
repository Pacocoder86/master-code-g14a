const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item));

// for (let propiedad in gato) {
//   console.log(gato[propiedad]);
// }
