// los 3 tipos de datos que tenemos, son: string, numer y boleanos//
// console.log("esta es la consola 🤣");
// console.log("tambien es un string");

// console.log(20); //esto es un número//

// console.log(20, 30); //esto es un número//

// console.log(20.6); //esto es un número//

// console.log("20"); //esto es un string//

// console.log(true); //estos son boleanos//
// console.log(false); //estos son boleanos//

//variables//

//espacoi de memoria el cual nos isirve para almacenar un dato.//

// hay 3 tipos de declaraciones de variables, var, let, const//

// let nombreUsuario = "Ignacio";
// let edadUsuario = 33;
// console.log(nombreUsuario);
// console.log(edadUsuario);

//concatenar//

// let nombreUsuario = "Ignacio"
// let edad = 33
// console.log ("mi nombre es: " + nombreUsuario + " " + edad );

// let numeroUno = 33;
// let numeroDos = 55;
// console.log(numeroDos + numeroUno);

//prompt es un alert que recibe un string//

// let numeroUno = parseInt (prompt ("ingrese un numero 1"));
// let numeroDos = parseInt (prompt ("ingrese un numero 2"));

// // console.log (typeof numeroUno);
// // console.log (parseInt (numeroUno))

// let resultado = numeroUno + numeroDos;
// console.log (resultado)

//operadores: algebráicos o matemáticos, comparación o relacional, y lógicos.//

// let resultado =  10 / 20
// console.log(resultado);

//Operadores relacionales, son idénticos a los que se definen en matempaticas; mayor que >, menor que <, igual que. y distinto que !==//

// let resultado = 10 === "10";
// console.log(resultado);

// let resultado = 10 !== "10";
// console.log(resultado);

//Operadores lógicos & & = y, || = o , ! = negación
//

//&& si los dos son verdaderos  devuelve verdedero,  || cpn que uno sea verdadero, devolverá verdadero, ! = negación//

// let resultado = true && false && true;
// console.log(resultado);

//Estructuras de control, permiten modificar el flujo de ejecución de las instrucciones de un programa, if/else = si oucrre algo, haz esto, sino haz lo otro. ? = operador ternario, equivalente a if/else, método abreviado. switch = estructura para casos específicos = similar a varios if/else anidados.
//
// repetitivas o iterativas: while, do hile, for //

// if(condicion) {
// //bloque verdadero
// }else{
// // faso
// }

// let stringUsuario = prompt('Escriba "Javascript"');

// if (stringUsuario === "Javascript") {
//   console.log("correcto");
// }
// else {
//     console.log("incorrecto")
// }

// let numUsuario =  parseInt (prompt ('Ingrese un número del  1 al 10'));

// if(numUsuario <= 10) {
//     console.log('perfecto')
// }
// else{
//     console.log("mal")
// }

//template string//

// let opcionUsuario = prompt(`
// Elija una opción:
// 1: Libros
// 2: Películas
// 3: Juegos
// `);
// console.log(opcionUsuario);

// //swicht//
// switch (opcionUsuario) {
//   case "1":
//     console.log("principito");
//     break;

//   case "2":
//     console.log("Matrix");
//     break;

//   case "3":
//     console.log("NFS");
//     break;
//   default:
//     console.log("opción no valida");
//     break;
// }

//while = ciclo que podemos ir repitiendo si la condición se cumplia o no//

// let numero = 1;

// while (numero <=10){
//     console.log(numero);
//     // numero = numero + 1;
//     numero ++;
// }

// console.log("fin numero" + numero);

//while/

// let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(numeroMaquina);

// let vidas = 3;

// let numeroUsuario = parseInt(prompt("Adivina el numro del 1 al 10"));

// while (numeroMaquina !== numeroUsuario && vidas > 1) {
  
//     let mensaje = (numeroMaquina > numeroUsuario) ? 'El numeroMaquina es mayor' : 'El numeroMaquina es menor'
  
//     console.log("Te equivocaste" + mensaje);
//   numeroUsuario = parseInt(prompt("numero del 1 al 10"));
//   vidas--;
// }

// if (numeroMaquina === numeroUsuario) {
//   console.log("ganaste");
// } else {
//   console.log("perdiste");
// }

//array, objetos similares a una lista, cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. //

// let frutas = ["platano", "sandía", "perita", "uva"];
// // console.log(frutas);
// // console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// for  (let i = 0; i < frutas.length; i++ ){
// console.log(frutas [i]);
// }

//for: crea unn bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en bucle.

//for of: la sentecia for...of ejeuta un bloque de código para cada elemento de un objeto iterale, como lo son:String, Array, objetios similares a array (por ejemplo arguments or NodeList), TyédArray, Map, Set e terables definidos por el usuario.


// f values () = nombre [Symbol.iterator] tiene el iterador en su interior ¿Cómo saber que varibales son iterables?


// for (let fruta of frutas){
// console.log(fruta)
// }

// let nombreUsuario = "Paco";

// for (let letra of nombreUsuario) {
//     console.log(letra);
// }

//funciones: conjunto de instracciones que reliza una tarea o calcula un valor , per que para que un procedimiento calique coo función, debe tomar alguna entrada y devolver una salida donde hay algua relación obvia enrte la entrada y la salida.
//

// function saludar (nombreUsuario){
//     return ("Bienvenido!" + nombreUsuario);
// }

// console.log(saludar ("Paco"));

//

// function sumar (n1, n2){
//     return parseInt(n1) + parseInt(n2);
// }

// console.log(sumar (2,2));

//

function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2);
}

let numUno = prompt("Ingrese número 1");
let numDos = prompt("Ingrese número 2");

// prompt = captura el resultado como un string 

console.log(sumar (numUno, numDos));