let carro = {
  llantas: 4,
  color: "rojo",
  puertas: 5,
  usaGasolina: true,
};

console.log(carro.color);
console.log(carro.puertas);
console.log(carro["usaGasolina"]);

//metodos del objeto

let perro = {
  nombre: "Canelo",
  color: "Cafe",
  edad: 3,
  raza: "Doberan",
  ladrar: function () {
    return `${this.nombre} puede ladrar`;
  },

  comer: function () {
    console.log("yomi yomi");
  },
};

console.log(perro.ladrar());

//crear valores
perro.tamaño = "grande";
perro.macho = true;

console.log(perro);

//modifiar valores
perro.edad = 5;

//eliminar un valor
delete perro.raza;

//destructuración

const animales = ["Conejo", "Gato", "Perro", "Rana"];

const [animal1, animal2, animal3, animal4] = animales;

console.log(
  `Mi primer mascota fue: ${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`
);

// ------ destructura lo que necesitas -----------

const nombres = ["Zanahoria", "Mei", "Taco", "Rene"];

const [nombre1, , nombre3] = nombres;
console.log(`Mis mascotas son: ${nombre1} y ${nombre3} `);

//Uso del operador rest
const empleado = [
  "Emilio",
  24,
  'Puebla, "Desarrollador front (El chido)',
  true,
];

/*Destructuración */
const [nombre, edad, ...rest] = empleado;

console.info(`${nombre} tiene ${edad} `);

console.info(`los datoscompletos son: ${rest}`);
