const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  comer(alimento) {
    console.log(`
      ${this.nombre} está comiendo ${alimento}
      `);
  },
  listarEnemigos() {
    this.enemigos.forEach((item) => console.log(item));
  },
};

//usando this, yo hago incapie al ambito que se esta utilizando. Si yo quiere acceder dentro de un método a una propiedad necesito utilizar e this
//No se debe usar con un método
//Si podemos utilizar las funciones de flecha dentro de un método pero no,c omo un método.

gato.listarEnemigos();
