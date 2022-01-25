const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

if (gato.hasOwnProperty("nombre")) {
  gato.nombre = "flojera";
}

console.log(gato.hasOwnProperty("edad"));
console.log(gato.hasOwnProperty("edadDos"));
