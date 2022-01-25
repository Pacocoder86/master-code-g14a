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

//cuando llamamos a una propiedad del objeto para que lo pinte en consola, no ocupamos los parentesis

//cuando tenemos funciones dentro de nuestro objeto, se llaman métodos.

const amigos = ["cobarde", "timido"];
console.log(amigos.push());
