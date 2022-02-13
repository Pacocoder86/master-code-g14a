const animalesTundra = ["Reno", "Liebre", "Zorro", " Búho"];

const [animal1, animal2, ...rest] = animalesTundra;
console.log(`algunos animales de la tunda, son:  ${animal1} y ${animal2}`);
console.log(`el resto de los animales, son: ${rest}`);
