/*let carro = {
  llantas: 4,
  color: "rojo",
  puertas: 5,
  usaGasolina: true,
};

/* formas de llamar los valores de un objeto
console.log(carro.color);
console.log(carro.puertas);

console.log(carro["usaGasolina"]);
console.log(carro["puertas"]);
*/

//-------------------------

let perro = {
  nombre: "Canelo",
  color: "cafe",
  edad: 3,
  raza: "Doberman",
  ladrar: function () {
    return `${this.nombre} puede ladrar wau`;
  },
  comer: function () {
    console.log("yomi yomi");
  },
};

// console.log(perro.ladrar());
// console.log(perro.comer());

// /*asignar nuevos valores a nuestro objeto*/

perro.tamaño = "grande";
// perro.macho = true;

// /* modificar valor*/
// perro.edad = 5;

// /*eliminar un valor */
delete perro.raza;

console.log(perro);

/* DESRUCTURACION  */

/*
const animales = ["conejo", "gato", "perro", "Rana"];
const [animal1, animal2, animal3, animal4] = animales;

console.log(
  `Mi primer mascota fue: ${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`
);
*/

//------ destructura lo que neesites ----

const nombres = ["Zanaoria", "Mei", "Taco", "Rene"];

const [nombre0, , nombre2] = nombres;

console.log(`Mis mascotas son: ${nombre0} y ${nombre2}`);

// destructuracion con el operador rest

const empleado = [
  "Emilio",
  24,
  "Puebla",
  "Desarrollador front (El chido)",
  true,
];

const [nombre, edad, ...rest] = empleado;
console.info(`${nombre} tiene ${edad} `);
console.info(`los datos completos son: ${rest}`);
