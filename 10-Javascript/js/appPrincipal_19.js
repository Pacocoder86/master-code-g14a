//objetos, estos estan definidos por una propiedad y un valor
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

//LEER EL OBJETO

// console.log(gato.nombre);
// console.log(gato["nombre"]);
// console.log(gato.duerme);
// console.log(gato["enemigos"][0]);
// console.log(gato.enemigos[0]);
// esta es otra forma de llamar un objeto, accediendo asus valores.

//CREATE READ UPDATE DELETE

//CREAR
gato.color = "azul";
//ACTUALIZAR
gato.edad = 5;
//DELETE
delete gato.duerme;

if (gato.hasOwnProperty("nombre")) {
  gato.nombre = "flojera";
}
console.log(gato);

//hasOwnProperty
console.log(gato.hasOwnProperty("edadDos"));
// si la propiedad existe, la consola te regresa un true, caso contrario, un false.

//como acceder a los objetos anidados
console.log(gato.otros.favoritos.comida.frio);
console.log(gato.otros.amigos[0]);

//encadenamiento opcional ?
console.log(gato.otros.favorito?.comida.caliente);
//undefined

//métodos
const raton = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer: function () {
    console.log("raton comiendo");
  },
  comerDos(alimento) {
    console.log("raton comiendo: " + alimento);
  },
};
raton.comer();
raton.comerDos("pez");

//this
const caballo = {
  nombre: "veloz",
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
caballo.comer("alfalfa");

//for in
const rata = {
  nombre: "veloz",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

for (let propiedad in rata) {
  console.log(rata[propiedad]);
}

//Object.values
const oso = {
  nombre: "veloz",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

console.log(Object.values(oso));
Object.values(oso).forEach((item) => console.log(item));
// estas son formas de iterar un objeto, pintado sus valores

//Destructuring objects + alias
const pez = {
  nombre: "nemo",
  duerme: true,
  // edad: 10,
  enemigos: ["agua", "perros"],
};

const nombrePez = pez.nombre;

const { nombre: nombreSuperPez, duerme, edad = 20 } = pez;

console.log(nombreSuperPez, duerme, edad);

//destructurar con datos anidados
const rana = {
  nombre: "nemo",
  duerme: true,
  // edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["cobarde", "timido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmon",
        caliente: "pollo",
      },
    },
  },
};

const { amigos } = rana.otros;
console.log(amigos);

//destructurar unn array
const sapo = {
  nombre: "nemo",
  duerme: true,
  // edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["cobarde", "timido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmon",
        caliente: "pollo",
      },
    },
  },
};

const { amigos: amigosArray } = sapo.otros;

const [amigoUno, amigoDos] = amigosArray;

console.log(amigoUno);

//Get y set
const pajaro = {
  nombre: "nemo",
  duerme: true,
  // edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    return this.nombre.toUpperCase();
  },
  set agregarEnemigo(nuevoAmigo) {
    this.enemigos.push(nuevoAmigo);
  },
};

console.log(pajaro.nombreMayuscula);

// console.log(pajaro.nombreMayuscula);
// pajaro.agregarEnemigo = "batman";
// console.log(pajaro);

//si quiero manipular el valor que esta dentro de una propiedad y trasnformarlo a mayusculas puedo utilizar el get

//SET
const tortuga = {
  nombre: "nemo",
  duerme: true,
  // edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    return this.nombre.toUpperCase();
  },
  set agregarEnemigo(nuevoAmigo) {
    this.enemigos.push(nuevoAmigo);
  },
};

tortuga.agregarEnemigo = "batman";
console.log(tortuga);
//el set toma un solo parámetro, y podemos modificar los valores que tiene ese propiedad.
