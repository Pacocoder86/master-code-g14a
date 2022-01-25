const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["cobarde", "timido"],
    favoritos: {
      comida: {
        frio: "salmon",
        caliente: "pollo",
      },
    },
  },
};

console.log(gato.otros.favoritos.comida.frio);
console.log(gato.otros.amigos[0]);
