const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["ag(ua", "perros"],

  comer(alimento) {
    console.log(`
    ${this.nombre} está comiendo ${alimento}

    `);
  },
};

//usando this, yo hago incapie al ambito que se esta utilizando. Si yo quiere acceder dentro de un método a una propiedad necesito utilizar e this

gato.comer(pez);
