// const nombre = "blueweb";

const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    return this.nombre.toUpperCase();
  },
  set agregarEnemigo(nuevoEnemigo) {
    this.enemigos.push(nuevoEnemigo);
  },
};

console.log(gato.nombreMayuscula);

gato.agregarEnemigo = "batman";
console.log(gato);
