const gato = {
  //   nombre: "valiente",
  duerme: "true",
  edad: 10,
  enemigos: ["agua", "perros"],
  comer: function (comida) {
    return `${this.nombre} está comiedo ${comida}`;
  },
  mostrarEnemigos() {
    return this.enemigos.forEach((item) => console.log(item));
  },
};

const comerDos = gato.comer("pez");

console.log(comerDos);
