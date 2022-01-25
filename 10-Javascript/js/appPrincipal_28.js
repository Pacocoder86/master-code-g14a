const nombre = "bluuweb";

const gato = {
  //   nombre: "valiente",
  duerme: "true",
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["Cobarde", "Imido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmón",
        caliente: "pollo",
      },
    },
  },
};

const nombreGato = gato.nombre;

const {
  nombre: nombreSuperGato = "sin nombre",
  duerme: duermeGato,
  edad,
} = gato;

const { amigos: amigosGatos } = gato.otros;
console.log(amigosGatos);

const { enemigos: enemigosArray } = gato;

// console.log(nombreSuperGato, duermeGato, edad);
